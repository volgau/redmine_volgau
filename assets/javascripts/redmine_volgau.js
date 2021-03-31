(function ($, document) {

    function insertStatusBadge (selector) {
        $(selector).each (function () {
            if ($(this).children ("span").length === 0) {
                var issueStatusCssClass = $(this).closest(".issue").attr("class").split(" ").find (
                    function (c) {
                        if (c.startsWith("status-")) {
                            return c;
                        }
                    }
                );
                var statusCssClass = typeof issueStatusCssClass != "undefined" ? issueStatusCssClass : "";
                $(this).prepend ("<span class='status-badge status-badge-" + statusCssClass + "'></span>");
            }
        });
    }

    function insertStatusBadges () {
        insertStatusBadge ("table.issues td.status");
        insertStatusBadge ("div.issue div.attributes div.status div.value");
    }

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
        insertStatusBadges ();
        if (isSelect2Installed ()) {
            applySelect2 (window.jql);
        }
    });

    $(document).on ("ajax:complete ajaxSuccess", function (event, data, status, xhr) {
        insertStatusBadges ();
        if (isSelect2Installed ()) {
            applySelect2Partial (window.jql);
        }
    });
}) (jQuery, document);