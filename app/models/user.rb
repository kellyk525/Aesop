class User < ApplicationRecord

    validates :email, :session_token, :first_name, :last_name, :password_digest, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password
    before_validation :ensure_session_token

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.update!(session_token: SecureRandom.urlsafe_base64(16))
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    has_many :carts
end
