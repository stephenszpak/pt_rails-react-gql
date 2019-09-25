require 'graphql/batch'
class UserLoader < GraphQL::Batch::Loader
  def initialize(model)
    @model = model
  end

  def perform(ids)
    @model.where(id: ids).each { |user| fulfill(user.id, user) }
    ids.each { |id| fulfill(id, nil) unless fulfilled?(id) }
  end

end
