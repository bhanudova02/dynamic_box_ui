function handelShowBox(id, radioId, sectionId) {
    document.querySelectorAll(".ExtraUI").forEach(el => el.innerHTML = "");
    document.getElementById(radioId).checked = true;
    const activeUI = document.getElementById(id);
    activeUI.innerHTML = `
    <div class="options-container">
        <div class="select-group">
            <div style="display: flex; align-items: end; gap: 6px;">
                <span class="select-label">#1</span>
                <div>
                    <div class="select-title">Size</div>
                    <select>
                        <option>S</option>
                    </select>
                </div>
            </div>
            <div style="display: flex; align-items: end; gap: 6px;">
                <span class="select-label">#2</span>
                <select class="size-select">
                    <option>S</option>
                </select>
            </div>
        </div>
        <div class="select-group">
            <div class="select-title">Colour</div>
            <div>
                <select>
                    <option>Colour</option>
                </select>
            </div>
            <div>
                <select class="color-select">
                    <option>Black</option>
                </select>
            </div>
        </div>
    </div>
    `;

    document.querySelectorAll("section").forEach(section => {
        section.style.border = ""; 
        section.style.backgroundColor = ""; 
    });

    const section = document.getElementById(sectionId);
    section.style.border = " 2px solid #FF6B82"; 
    section.style.backgroundColor = "#FFF9FA";
}