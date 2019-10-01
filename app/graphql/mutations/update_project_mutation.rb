module Mutations
  class UpdateProjectMutation < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :title, String, required: true
    argument :description, String, required: false
    argument :is_completed, Boolean, required: false

    field :project, Types::ProjectType, null: true
    field :errors, [String], null: false

    def resolve(id:, title:, description: nil, is_completed: nil)
      check_authentication!

      project = Project.find(id)

      if project.update(title: title, description: description, is_completed: is_completed)
        { project: project }
      else
        { errors: project.errors.full_messages }
      end
    end
  end
end
