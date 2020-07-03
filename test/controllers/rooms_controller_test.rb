require 'test_helper'

class RoomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @room = rooms(:one)
  end

  test "should get index" do
    get rooms_url, as: :json
    assert_response :success
  end

  test "should create room" do
    assert_difference('Room.count') do
      post rooms_url, params: { room: { board_id: @room.board_id, image_url: @room.image_url, name: @room.name, notes: @room.notes, shopping_list: @room.shopping_list, swatches_url: @room.swatches_url, to_do_list: @room.to_do_list, user_id: @room.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show room" do
    get room_url(@room), as: :json
    assert_response :success
  end

  test "should update room" do
    patch room_url(@room), params: { room: { board_id: @room.board_id, image_url: @room.image_url, name: @room.name, notes: @room.notes, shopping_list: @room.shopping_list, swatches_url: @room.swatches_url, to_do_list: @room.to_do_list, user_id: @room.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy room" do
    assert_difference('Room.count', -1) do
      delete room_url(@room), as: :json
    end

    assert_response 204
  end
end
