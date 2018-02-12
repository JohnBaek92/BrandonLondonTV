class BlogsController < ApplicationController

    def index
        start = params[:start].to_i
        offset = params[:offset].to_i
        last = start + offset
        blogs = Blog.all[start...last]
        @blogs = blogs ? blogs : []
    end

    def show 
        @blog = Blog.find(params[:id])
    end


end
