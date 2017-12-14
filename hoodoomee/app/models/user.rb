class User < ApplicationRecord
  has_many :barbers, through: :favorites
  has_many :favorites
end
