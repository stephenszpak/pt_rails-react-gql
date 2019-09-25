require 'rails_helper'

RSpec.describe Types::QueryType do
  describe 'projects' do
    let!(:projects) { create_pair(:project) }

    let(:query) do
      %(query {
        projects {
          title
        }
      })
    end

    subject(:result) do
      ProjectTrackerSchema.execute(query).as_json
    end

    it 'returns all projects' do
      expect(result.dig('data', 'projects')).to match_array(
        projects.map { |project| { 'title' => project.title } }
      )
    end
  end
end
