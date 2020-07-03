class CreateJoinTableBoardRoom < ActiveRecord::Migration[6.0]
  def change
    create_join_table :boards, :rooms do |t|
      # t.index [:board_id, :room_id]
      # t.index [:room_id, :board_id]
    end
  end
end
