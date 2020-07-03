class BoardsController < ApplicationController
  before_action :set_board, only: [:show, :update, :destroy]

  # GET /boards
  def index
    @boards = Board.all

    render json: @boards
  end

  # GET /boards/1
  def show
    render json: @board, include: :rooms
  end

  # DELETE /boards/1
  def destroy
    @board.destroy
  end

  def board_to_room
    @room = Room.find(params[:room_id])
    @board = Board.find(params[:id])

    @board.rooms << @room

    render json: @board, include: :rooms 
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_board
      @board = Board.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def board_params
      params.require(:board).permit(:name, :user_id)
    end
end
