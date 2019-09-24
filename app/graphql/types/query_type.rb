module Types
  class QueryType < Types::BaseObject
    field :projects, [Types::ProjectType], null: false, description: 'Returns list of projects'

    def projects
      Project.all
    end
  end
end
