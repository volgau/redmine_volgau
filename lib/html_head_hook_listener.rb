class ViewHooks < Redmine::Hook::ViewListener
    render_on :view_layouts_base_html_head, :partial => 'redmine_volgau/includes'
end
  