class Barber < ApplicationRecord
  # belongs_to :barbershop
  has_many :users, through: :user_queues
  has_many :users, through: :favorites
end
