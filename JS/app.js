const app = document.getElementById("app");
const container__top = document.getElementById("container__top");
const container__middle = document.getElementById("container__middle");
const container__bottom = document.getElementById("container__bottom");

const baseURL = `https://res.friscoisd.org/services/Bond/Project?filterType=test&filter=test&refresh=true`;
const updateURL = `https://www.friscoisd.org/jsonHandler/bondUpdate.ashx`;
const photoURL = `https://www.friscoisd.org/jsonHandler/bondPhotos.ashx?projectId=18BD-1005`;

const dataSet = [];
const dataSetUPDATE = [];
const dataSetPHOTO = [];

const DATA_NOT_FOUND = `
                      <div class="notFound animated fadeInUp">
                        <div class="notFound__text">
                          <h3>No results containing all your search terms were found.</h3>
                          <p>Try searching for project title, category, or campus type</p>
                        </div>
                      </div>`;

const getData = () => {
  fetch(baseURL)
    .then((response) => response.json())
    .then((data) => {
      dataSet.push(...data);
      init();
    })
    .catch((error) => {
      container__top.innerHTML = `${DATA_NOT_FOUND} ${error}`;
    });
  getData2();
  getData3();
};
const getData2 = () => {
  fetch(updateURL)
    .then((response) => response.json())
    .then((data) => {
      dataSetUPDATE.push(...data);
      init();
    })
    .catch((error) => {
      updateURL.innerHTML = `${DATA_NOT_FOUND} ${error}`;
    });
};

const getData3 = () => {
  fetch(photoURL)
    .then((response) => response.json())
    .then((data) => {
      dataSetPHOTO.push(...data);
      init();
    })
    .catch((error) => {
      container__bottom.innerHTML = `${DATA_NOT_FOUND} ${error}`;
    });
};

function init() {
  const middleContainerHTML = ({
    Update,
    UpdateDate,
    UpdateImage,
    ProjectId,
  }) => {
    return `
      <div class="top__title_middle middle-title">
        <h1>Updates</h1>
        <p>
          <em class="fa fa-pencil-square" aria-hidden="true"></em> Updated
          information
        </p>
      </div>
      <div class="middle__news">
        <div class="news__top">
          <img
            src="${UpdateImage}"
            alt="Updates and news"
          />
        </div>
        <div class="news__bottom">
          <div class="bottom__title">
            <h2>${UpdateDate}</h2>
          </div>
          <div class="bottom__description">
            <p>
              ${
                Update != null
                  ? Update
                  : "This project is part of the bond approved by Frisco ISD voters in November 2018. The bond package will provide funding for new schools and maintenance for existing facilities through an enrollment of 72,000 students or the 2025-26 school year."
              }
            </p>
          </div>
        </div>
      </div>
      <div class="middle__news">
        <div class="news__top">
          <img
            src="${UpdateImage}"
            alt="Updates and news"
          />
        </div>
        <div class="news__bottom">
          <div class="bottom__title">
            <h2>${UpdateDate}</h2>
          </div>
          <div class="bottom__description">
            <p>
              ${
                Update != null
                  ? Update
                  : "This project is part of the bond approved by Frisco ISD voters in November 2018. The bond package will provide funding for new schools and maintenance for existing facilities through an enrollment of 72,000 students or the 2025-26 school year."
              }
            </p>
          </div>
        </div>
      </div>
      <div class="middle__news">
        <div class="news__top">
          <img
            src="${UpdateImage}"
            alt="Updates and news"
          />
        </div>
        <div class="news__bottom">
          <div class="bottom__title">
            <h2>${UpdateDate}</h2>
          </div>
          <div class="bottom__description">
              <p>
                ${
                  Update != null
                    ? Update
                    : "This project is part of the bond approved by Frisco ISD voters in November 2018. The bond package will provide funding for new schools and maintenance for existing facilities through an enrollment of 72,000 students or the 2025-26 school year."
                }
            </p>
          </div>
        </div>
      </div>
      `;
  };

  const topContainerHTML = ({
    ThumbnailImg,
    ProjectTitle,
    ProjectedCompletionString,
    ProjectedBudget,
    PercentComplete,
    Description,
    IsComplete,
    ProjectId,
    Category,
    CampusType,
  }) => {
    return `
      <div>
        <div class="top__info-isComplete">
          <div class="top__title">
            <h1>${ProjectTitle}</h1>
            <p>
              <em class="fa fa-graduation-cap" aria-hidden="true"></em> ${CampusType}
            </p>
          </div>

          <div class="isComplete">
          ${
            IsComplete
              ? `<div class="isComplete__label">
                    <p>Completed</p>
                </div>`
              : ``
          }              
          </div>
        </div>
      
      <div class="top__img">
        <img
          src="${ThumbnailImg}"
          alt="${ProjectTitle}"
        />
      </div>
      <div class="top__info">
        <!-- Estimated Completion Date -->
        <div class="top__info-extra">
          <div class="info-extra__icon">
            <em class="fa fa-calendar-check-o" aria-hidden="true"></em>
          </div>
          <div class="info-extra__title">
            <span>Estimated Completion Date</span>
            <p>${
              ProjectedCompletionString == ""
                ? "12/12/2022"
                : ProjectedCompletionString
            }</p>
          </div>
        </div>

        <!-- Projected Budget -->
        <div class="top__info-extra">
          <div class="info-extra__icon">
            <em class="fa fa-usd" aria-hidden="true"></em>
          </div>
          <div class="info-extra__title">
            <span>Projected Budget</span>
            <p>$${
              ProjectedBudget >= 1000000
                ? ProjectedBudget.toFixed(2).slice(0, 2)
                : ProjectedBudget.toFixed(2).slice(0, 3)
            } 
            ${ProjectedBudget >= 1000000 ? "M" : "K"}</p>
          </div>
        </div>
        <!-- Percentage Completed -->
        <div class="top__info-extra">
          <div class="info-extra__icon">
            <em class="fa fa-tasks" aria-hidden="true"></em>
          </div>
          <div class="info-extra__title">
            <span>Percentage Completed</span>
            <p class="percentage">${PercentComplete}%</p>
          </div>
        </div>
        <!-- Category -->
        <div class="top__info-extra">
          <div class="info-extra__icon">
            <em class="fa fa-briefcase" aria-hidden="true"></em>
          </div>
          <div class="info-extra__title">
            <span>Category</span>
            <p>${Category}</p>
          </div>
        </div>
      </div>
      <div class="top__description">
        <p>
        ${Description}
        </p>
      </div>
    </div>

    
    </div>`;
  };

  const bottomContainerHTML = ({
    PhotoCollection,
    TitleId,
    PhotoDescription,
  }) => {
    console.log(PhotoCollection);
    return `
    <div class="container-bottom">
      <div class="top__title">
        <h1>${TitleId}</h1>
        <p>
          <em class="fa fa-picture-o" aria-hidden="true"></em>${PhotoDescription}
        </p>
      </div>
      <ul class="hideMobile">
        <li>
          <img
            src="${PhotoCollection}"
            alt="${PhotoDescription}"
            loading="lazy"
          />
        </li>
      </ul>
    </div>`;
  };

  function displayMatchesUpdate() {
    const html = dataSetUPDATE
      .filter(function (data) {
        // Pass here dynamic ID
        return data.ProjectId === "18BD-1002";
      })
      .map((data) => {
        return middleContainerHTML(data);
      })
      .join("");

    if (html.length > 0) {
      container__middle.innerHTML = html;
    } else {
      container__middle.innerHTML = `${DATA_NOT_FOUND}`;
    }
  }

  function displayMatchesPhotos() {
    const html = dataSetPHOTO
      .map((data) => {
        return bottomContainerHTML(data);
      })
      .join("");

    if (html.length > 0) {
      container__bottom.innerHTML = html;
    } else {
      container__bottom.innerHTML = `${DATA_NOT_FOUND}`;
    }
  }

  function displayMatches() {
    const html = dataSet
      .filter(function (data) {
        // Pass here dynamic ID
        return data.ProjectId === "18BD-1002";
      })
      .map((data) => {
        return topContainerHTML(data);
      })
      .join("");

    if (html.length > 0) {
      container__top.innerHTML = html;
    } else {
      container__top.innerHTML = `${DATA_NOT_FOUND}`;
    }
  }

  displayMatchesPhotos();
  displayMatchesUpdate();
  displayMatches();
}

window.onload = () => {
  getData();
};
