class CreateBarbershops < ActiveRecord::Migration[5.1]
  def change
    create_table :barbershops do |t|
      t.string :name
      t.text :street
      t.string :city
      t.string :state
      t.integer :zip
      t.integer :phone
      t.integer :like
      t.string :pic

      t.timestamps
    end
  end
end
