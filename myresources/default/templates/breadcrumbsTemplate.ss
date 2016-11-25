<% if Pages %>
<nav class="breadcrumbs" aria-label="breadcrumbs" role="navigation">
    <ul>
        <li class="item">
            <a href="$absoluteBaseURL">
                Home
            </a>
        </li>
        <%-- use css :after to add things like / or > --%>
        <% loop Pages %>
            <% if Last %>
                <li class="item last current">
                    $Title.XML
                </li>
            <% else %>
                <li class="item">
                    <a href="$Link">
                        $MenuTitle.XML
                    </a>
                </li>
            <% end_if %>
        <% end_loop %>
    </ul>
</nav>
<% end_if %>
