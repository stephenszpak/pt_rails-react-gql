module Mutations
  class AddProjectMutation < Mutations::BaseMutation
    argument :title, String, required: true
    argument :description, String, required: false
    argument :is_completed, Boolean, required: false

    field :project, Types::ProjectType, null: true
    field :errors, [String], null: false

    def resolve(title:, description: nil, is_completed: nil)
      if context[:current_user].nil?
        raise GraphQL::ExecutionError,
              "You need to authenticate to perform this action"
      end

      project = Project.new(
        title: title,
        description: description,
        is_completed: is_completed,
        user: context[:current_user]
      )

      if project.save
        { project: project }
      else
        { errors: project.errors.full_messages }
      end
    end
  end
end
