import { BandSiteAPI } from "./band-site-api.js";
const bandSiteAPI = new BandSiteAPI("e865bbf6-2ee3-4669-9c18-95e5dd94dc50");
const showSection = document.getElementById("show-section");
bandSiteAPI.getShows().then((response) => {
  let showElements = "";
  for (let show of response) {
    showElements += Show(show);
  }
  showSection.innerHTML = `
    <div class="show__table-header">
      <div class="show__table-item">DATE</div>
      <div class="show__table-item">VENUE</div>
      <div class="show__table-item">LOCATION</div>
    </div>
    ${showElements}
  `;
});

const Show = (show) => {
  return `
    <div class="show__element" >
      <div class="show__container" >
        <div class="show__date"> 
          <div class="show__element-label">DATE</div>
          <div class="show__element-value--date">${new Date(show.date).toLocaleDateString()}</div>
        </div>
        <div class="show__venue">
          <div class="show__element-label">VENUE</div>
          <div class="show__element-value">${show.place}</div> 
        </div>
        <div class="show__location">
          <div class="show__element-label">LOCATION</div>
          <div class="show__element-value">${show.location}</div> 
        </div>
      </div>
      <button class="show__button">BUY TICKETS</button>
    </div>
  `;
};