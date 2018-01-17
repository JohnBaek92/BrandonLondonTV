class CreatePages < ActiveRecord::Migration[5.0]
  def change
    create_table :pages do |t|
      t.string :page_type, null: false, index: true
      t.timestamps
    end
  end
end
