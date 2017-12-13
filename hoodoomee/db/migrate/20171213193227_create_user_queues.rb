class CreateUserQueues < ActiveRecord::Migration[5.1]
  def change
    create_table :user_queues do |t|
      t.integer :barber_id
      t.integer :user_id
      t.boolean :active
      t.boolean :completed
      t.boolean :cancelled

      t.timestamps
    end
  end
end
