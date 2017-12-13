class BarbershopsController < ApplicationController
  before_action :set_barbershop, only: [:show, :update, :destroy]

  # GET /barbershops
  def index
    @barbershops = Barbershop.all

    render json: @barbershops
  end

  # GET /barbershops/1
  def show
    render json: @barbershop
  end

  # POST /barbershops
  def create
    @barbershop = Barbershop.new(barbershop_params)

    if @barbershop.save
      render json: @barbershop, status: :created, location: @barbershop
    else
      render json: @barbershop.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /barbershops/1
  def update
    if @barbershop.update(barbershop_params)
      render json: @barbershop
    else
      render json: @barbershop.errors, status: :unprocessable_entity
    end
  end

  # DELETE /barbershops/1
  def destroy
    @barbershop.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_barbershop
      @barbershop = Barbershop.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def barbershop_params
      params.require(:barbershop).permit(:name, :street, :city, :state, :zip, :phone, :like, :pic)
    end
end
