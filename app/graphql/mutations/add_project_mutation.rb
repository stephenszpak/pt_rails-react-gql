module Mutations
  class AddProjectMutation < Mutations::BaseMutation
    argument :title, String, required: true
    argument :description, String, required: false
    argument :is_completed, Boolean, required: false

    field :project, Types::ProjectType, null: true
    field :errors, [String], null: false

    def resolve(title:, description: nil, is_completed: nil)
      check_authentication!

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
