class User < ApplicationRecord
  belongs_to :user_queue
  has_many :barbers, through: :favorites
  has_many :favorites
end
