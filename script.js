document.addEventListener("DOMContentLoaded", function () {
    const myButton1 = document.getElementById("myButton1");
    const myPopup1 = document.getElementById("myPopup1");
    const closePopup1 = document.getElementById("closePopup1");
  
    const myButton2 = document.getElementById("myButton2");
    const myPopup2 = document.getElementById("myPopup2");
    const closePopup2 = document.getElementById("closePopup2");
  
    myButton1.addEventListener("click", function () {
      myPopup1.classList.add("show");
    });
    closePopup1.addEventListener("click", function () {
      myPopup1.classList.remove("show");
    });
  
    myButton2.addEventListener("click", function () {
      myPopup2.classList.add("show");
    });
    closePopup2.addEventListener("click", function () {
      myPopup2.classList.remove("show");
    });
  
    window.addEventListener("click", function (event) {
      if (event.target === myPopup1) {
        myPopup1.classList.remove("show");
      }
      if (event.target === myPopup2) {
        myPopup2.classList.remove("show");
      }
    });
  
    function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function showFadeInElements() {
      var elements = document.querySelectorAll('.fade-in');
      elements.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', showFadeInElements);
  
    // Example database of job listings
    const jobListings = [
      {
        id: 1,
        jobTitle: "Software Engineer",
        description: "We are seeking a talented Software Engineer...",
        skills: ["JavaScript", "React", "Node.js"],
        keywords: ["frontend", "full-stack"],
      },
      {
        id: 2,
        jobTitle: "Product Manager",
        description: "We are looking for an experienced Product Manager...",
        skills: ["Product Management", "Market Research", "Project Management"],
        keywords: ["product development", "product strategy"],
      },
      {
        id: 3,
        jobTitle: "Data Scientist",
        description: "We are hiring a skilled Data Scientist...",
        skills: ["Python", "Machine Learning", "Data Analysis"],
        keywords: ["data mining", "data visualization"],
      },
      // Add more job listings here...
    ];
  
    // Function to perform the search
    function performSearch(query) {
      const searchResults = jobListings.filter((job) => {
        const jobTitleMatches = job.jobTitle.toLowerCase().includes(query.toLowerCase());
        const skillsMatch = job.skills.some((skill) => skill.toLowerCase().includes(query.toLowerCase()));
        const keywordsMatch = job.keywords.some((keyword) => keyword.toLowerCase().includes(query.toLowerCase()));
        return jobTitleMatches || skillsMatch || keywordsMatch;
      });
  
      displaySearchResults(searchResults);
    }
  
    // Function to display search results
    function displaySearchResults(results) {
  const searchResultsSection = document.getElementById("searchResults");

  if (results.length === 0) {
    searchResultsSection.innerHTML = "<p>No matching job listings found.</p>";
  } else {
    let resultsHTML = "<h2>Search Results</h2>";

    results.forEach((job) => {
      resultsHTML += `
        <div class="job-card fade-in">
          <img src="job${job.id}-image.jpg" alt="${job.jobTitle}">
          <h3>${job.jobTitle}</h3>
          <p>${job.description}</p>
          <!-- Add other job details here -->
        </div>
      `;
    });

    searchResultsSection.innerHTML = resultsHTML;

    // Trigger the animation by adding the "active" class to the search results
    const searchResultCards = document.querySelectorAll(".job-card");
    searchResultCards.forEach((card) => card.classList.add("active"));
  }
}

  
    // Event listener for the search form submission
    const searchForm = document.getElementById("searchForm");
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const searchTerm = document.getElementById("searchInput").value;
      performSearch(searchTerm);
    });
  });

  
  