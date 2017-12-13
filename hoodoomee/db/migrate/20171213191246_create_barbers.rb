class CreateBarbers < ActiveRecord::Migration[5.1]
  def change
    create_table :barbers do |t|
      t.string :fname
      t.string :lname
      t.string :email
      t.integer :phone
      t.text :street
      t.string :city
      t.string :state
      t.integer :zip
      t.string :pic
      t.string :ig
      t.integer :likes
      t.integer :barbershop_id

      t.timestamps
    end
  end
end
