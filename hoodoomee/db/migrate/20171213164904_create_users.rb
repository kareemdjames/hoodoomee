class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :fname
      t.string :lname
      t.text :email
      t.text :street
      t.string :city
      t.string :state
      t.integer :zip
      t.string :photo

      t.timestamps
    end
  end
end
