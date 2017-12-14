class UserQueue < ApplicationRecord
  belongs_to :barber
  has_many :users
end
