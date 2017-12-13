# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171213194430) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "barbers", force: :cascade do |t|
    t.string "fname"
    t.string "lname"
    t.string "email"
    t.integer "phone"
    t.text "street"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.string "pic"
    t.string "ig"
    t.integer "likes"
    t.integer "barbershop_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "barbershops", force: :cascade do |t|
    t.string "name"
    t.text "street"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.integer "phone"
    t.integer "like"
    t.string "pic"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "barber_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_queues", force: :cascade do |t|
    t.integer "barber_id"
    t.integer "user_id"
    t.boolean "active"
    t.boolean "completed"
    t.boolean "cancelled"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "fname"
    t.string "lname"
    t.text "email"
    t.text "street"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.string "photo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
