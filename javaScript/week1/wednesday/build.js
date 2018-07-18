function buildPage() {
    
    var title = document.createElement('title');
    title.textContent = "HighOnCoding";
    document.head.appendChild(title);

    var meta1 = document.createElement("meta");
    meta1.charset = "utf-8";
    document.head.appendChild(meta1);

    var meta2 = document.createElement("meta");
    meta2.name = "viewport";
    meta2.content = "width=device-width, initial-scale=1, shrink-to-fit=no";
    document.head.appendChild(meta2);

    var container = document.getElementById('container');
    container.classList = "container-fluid";

    // create navbar div
    var navDiv = document.createElement('nav');
    navDiv.classList = 'navbar navbar-expand navbar-dark p-4';
    navDiv.style.backgroundColor = "rgb(82, 167, 250)";
    container.appendChild(navDiv);

    // create inner nav div
    var innerNavDiv = document.createElement('div');
    innerNavDiv.classList = "nav navbar-nav h3";
    navDiv.appendChild(innerNavDiv);

    // create as
    var a1 = document.createElement('a');
    a1.classList = "nav-item nav-link active";
    a1.textContent = "HighOnCoding"
    innerNavDiv.appendChild(a1);

    var a2 = document.createElement('a');
    a2.classList = "nav-item nav-link active small pl-5";
    a2.textContent = "Home"
    innerNavDiv.appendChild(a2);

    var a3 = document.createElement('a');
    a3.classList = "nav-item nav-link small pl-5";
    a3.textContent = "Categories"
    innerNavDiv.appendChild(a3);

    // create inner container
    var articleBody = document.createElement('div');
    articleBody.classList = "container";
    container.appendChild(articleBody);

    // create first section of article
    var topDiv = document.createElement('div');
    topDiv.classList = "p-4 mt-4";
    topDiv.style.backgroundColor = "rgb(221, 222, 224)";
    articleBody.appendChild(topDiv);

    var h1 = document.createElement('h1');
    h1.classList = 'h1';
    h1.style.color = "rgb(83, 88, 94)";
    h1.textContent = "Curse of the Current Reviews";
    topDiv.appendChild(h1);

    var p1 = document.createElement('p');
    p1.textContent = `When you want to buy any application from the Apple iTubes store you have more choices that you can handle.
    Most of the users scroll past the application description completely avoiding it like ads displayed on
    the right column of your webpage. Their choice is dependent on three important factors price, screenshot,
    and reviews.`;
    topDiv.appendChild(p1);

    // create second section of article
    var midDiv = document.createElement('div');
    articleBody.appendChild(midDiv);

    var h2 = document.createElement("h4");
    h2.classList = "h4 pt-4";
    h2.style.color = "rgb(6, 101, 192)";
    h2.textContent = "Hello WatchKit";
    midDiv.appendChild(h2);

    var p2 = document.createElement("p");
    p2.textContent = `Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK
    release. The WatchKit framework enables the developers to create Apple Watch applications. In this article
    we are going to focus on the basics of getting started with the WatchKit and developing apps for the
    Apple Watch.`
    midDiv.appendChild(p2);

    var bar1 = document.createElement('p');
    bar1.classList = "pl-2";
    bar1.style.color = 'white';
    bar1.style.backgroundColor = "rgb(243, 144, 24)";
    bar1.innerHTML = '12 comments <span style="color: rgb(243, 144, 24);">____</span> 124 likes';
    midDiv.appendChild(bar1);

    // create third section of article
    var bottomDiv = document.createElement('div');
    articleBody.appendChild(bottomDiv);

    var h3 = document.createElement("h4");
    h3.classList = "h4 pt-4";
    h3.style.color = "rgb(6, 101, 192)";
    h3.textContent = "Introduction to Swift";
    bottomDiv.appendChild(h3);

    var p3 = document.createElement("p");
    p3.textContent = `Swift is a modern programming language developed by apple to create the next generation of iOS ans OSX applications.
    Swift is a fairly new language and still in development but it clearly reflects the intentions and the
    future direction. This article will revolve around the basic concepts in the Swift language and how you
    can get started.`
    bottomDiv.appendChild(p3);

    var bar2 = document.createElement('p');
    bar2.classList = "pl-2";
    bar2.style.color = 'white';
    bar2.style.backgroundColor = "rgb(243, 144, 24)";
    bar2.innerHTML = '15 comments <span style="color: rgb(243, 144, 24);">____</span> 45 likes';
    bottomDiv.appendChild(bar2);
}