class Favorite < ApplicationRecord
  belongs_to :user
  has_many :users
  has_many :barbers
end
