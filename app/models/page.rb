# == Schema Information
#
# Table name: pages
#
#  id         :integer          not null, primary key
#  type       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Page < ApplicationRecord

    has_many :links
end
