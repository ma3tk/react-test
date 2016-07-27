class TestController < ApplicationController
  def index
  end

  def ajax
    render json: {
        title: 'Bun Bun Hello YouTube!',
    }
  end
end
