(function ($, document) {

    function applySelect2Partial ($) {
        $("#issue-form select#issue_assigned_to_id").select2 ({dropdownAutoWidth: 'true', width: '60%'});
        $("#issue-form select[id^='issue_custom_field_values']").select2 ({dropdownAutoWidth: 'true', width: '60%'});
    }

    function applySelect2 ($) {
        applySelect2Partial ($);
        $("#issue-form select#time_entry_activity_id").select2 ({dropdownAutoWidth: 'true', width: '60%'});
        $("#new_time_entry select#time_entry_activity_id").select2 ();
    }

    function isSelect2Installed () {
        return (typeof (window.jql) === "function" && window.jql ().select2 != "undefined");
    }

    $(document).ready (function () {
        if (isSelect2Installed ()) {
            applySelect2 (window.jql);
        }
    });

    $(document).on ("ajax:complete ajaxSuccess", function (event, data, status, xhr) {
        if (isSelect2Installed ()) {
            applySelect2Partial (window.jql);
        }
    });
}) (jQuery, document);