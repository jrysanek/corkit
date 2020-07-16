class ToDosController < ApplicationController
    before_action :authorize_request

    def index 
      
        @room= Room.find(params[:room_id])
        @to_dos= @room.to_dos
        render json: @to_dos
    end

    def create
        @room= Room.find(params[:room_id])
        @to_do= @room.to_dos.build(to_do_params)
        @to_do.user= @current_user
        if @to_do.save
            render json: @to_do
        else 
            render json: {error: @to_do.errors.full_message}
        end
        
    end
    def destroy
        @to_do= ToDo.find(params[:id])
        if @to_do.destroy 
            render json: @to_do
        else 
            render json: {error: @to_do.errors.full_message}
        end
        
        
    end
    private 
    def to_do_params
        params.require(:to_do).permit(:name, :description)
    end

    
end
