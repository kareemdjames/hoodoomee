class Barber < ApplicationRecord
  belongs_to :barbershop
  belongs_to :favorite
  has_many :users, through: :user_queues
  has_many :users, through: :favorites
end
