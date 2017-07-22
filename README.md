# jQuery animation scroll-to

Settings:
<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>animateSpeed</td>
<td>int</td>
<td>300</td>
<td>Animation speed to anchor point</td>
</tr>
<tr>
<td>fixedNav</td>
<td>boolean</td>
<td>false</td>
<td>Gets height of fixed nav and subtracts from the offset</td>
</tr>
<td>fixedNavElem</td>
<td>jQuery element</td>
<td>null</td>
<td>Element on fixed nav</td>
</tr>
</tr>
<td>hash</td>
<td>boolean</td>
<td>false</td>
<td>Set #url to true or false</td>
</tr>
</tr>
<td>scrollTo</td>
<td>jQuery element</td>
<td>null</td>
<td>Set element to scroll to</td>
</tr>
</tr></tbody></table>

Example:

    <div class="fixed-nav" data-fixed-nav>
        I am fixed
    </div>

    <a href="#anchor" data-scroll-to='{"animateSpeed" : 300, "fixedNavElem" : "[data-fixed-nav]" "fixedNav" : true, "hash" : true}'>Scroll to #anchor elem</a>

    <div id="anchor">
        Anchor
    </div>
