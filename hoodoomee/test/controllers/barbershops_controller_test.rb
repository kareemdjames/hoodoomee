require 'test_helper'

class BarbershopsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @barbershop = barbershops(:one)
  end

  test "should get index" do
    get barbershops_url, as: :json
    assert_response :success
  end

  test "should create barbershop" do
    assert_difference('Barbershop.count') do
      post barbershops_url, params: { barbershop: { city: @barbershop.city, like: @barbershop.like, name: @barbershop.name, phone: @barbershop.phone, pic: @barbershop.pic, state: @barbershop.state, street: @barbershop.street, zip: @barbershop.zip } }, as: :json
    end

    assert_response 201
  end

  test "should show barbershop" do
    get barbershop_url(@barbershop), as: :json
    assert_response :success
  end

  test "should update barbershop" do
    patch barbershop_url(@barbershop), params: { barbershop: { city: @barbershop.city, like: @barbershop.like, name: @barbershop.name, phone: @barbershop.phone, pic: @barbershop.pic, state: @barbershop.state, street: @barbershop.street, zip: @barbershop.zip } }, as: :json
    assert_response 200
  end

  test "should destroy barbershop" do
    assert_difference('Barbershop.count', -1) do
      delete barbershop_url(@barbershop), as: :json
    end

    assert_response 204
  end
end
