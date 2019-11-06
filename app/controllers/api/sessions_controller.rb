class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['We\'re sorry, there is an error with your email and/or password. Remember passwords are 4 to 12 characters (letters or numbers) long. Please try again.'], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
      render 'api/users/show'
    else
      render json: ['Please Sign In'], status: 404
    end
  end

end
