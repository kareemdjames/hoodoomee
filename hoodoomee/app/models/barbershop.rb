class Barbershop < ApplicationRecord
  has_many :barbers
  # may not need
  # has_many :users, through: :barbers
  # has_many :queues, through: :barbers

end
