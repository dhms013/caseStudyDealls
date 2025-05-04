describe('Search for a mentor', () => {
  beforeEach(() => {
    cy.visit('/mentoring');
    cy.wait(200);
  });

  it('should directing user to welcome page', () => {
    cy.get('h1').should('contain', 'Dapatkan Mentoring Kehidupan'); //header wording
    cy.wait(200);
  });

  it('should find a mentors by name using search bar', () => {
    cy.get('input[class="ant-input"]').type('Cika'); //search bar
    cy.wait(200);
    cy.get('.mt-4.grid.grid-cols-1.gap-y-4.lg\\:mt-6.lg\\:grid-cols-4.lg\\:gap-x-\\[22px\\].lg\\:gap-y-5').should('contain', 'a'); //mentor icon
    cy.wait(200);
    cy.get('a').should('have.length.greaterThan', 0); //mentor icon
    cy.wait(200);
    cy.get('h4').should('contain', 'Cika') //mentor icon name 
    cy.wait(200);
  });

  it('should find a mentors by career using search bar', () => {
    cy.get('input[class="ant-input"]').type('qa'); //search bar
    cy.wait(200);
    cy.get('.mt-4.grid.grid-cols-1.gap-y-4.lg\\:mt-6.lg\\:grid-cols-4.lg\\:gap-x-\\[22px\\].lg\\:gap-y-5').should('contain', 'a'); //mentor icon
    cy.wait(200);
    cy.get('a').should('have.length.greaterThan', 0); //mentor icon
    cy.wait(200);
    cy.get('a > div > div > div').should('contain', 'QA Software Engineer'); //mentor career
    cy.wait(200);
  });

  it('should not show any mentors when search using invalid keyword', () => {
    cy.get('input[class="ant-input"]').type('no mentor'); //search bar
    cy.wait(200);
    cy.get('h3').should('contain', 'Tidak ada hasil pencarian ditemukan'); //result page
    cy.wait(200);
  });

  it('should show all mentors after user click "Lihat Semua Mentor" button', () => {
    cy.get('a').click //'Lihat Semua Mentor' button
    cy.wait(200);
  });

  it('should filter mentor based on career category', () => {
    cy.get('div.swiper-slide-next img.-translate-x-1\\/2').click //accounting
    cy.wait(200);
    cy.get("div.swiper > div > div:nth-of-type(3) img.-translate-x-1\\/2").click; //art & design
    cy.wait(200);
    cy.get("div:nth-of-type(4) img.-translate-x-1\\/2").click; //bussiness
    cy.wait(200);
    cy.get("div:nth-of-type(5) img.-translate-x-1\\/2").click; //data
    cy.wait(200);
    cy.get("div:nth-of-type(6) img.-translate-x-1\\/2").click; //finance
    cy.wait(200);
    cy.get("div:nth-of-type(7) img.-translate-x-1\\/2").click; //HR
    cy.wait(200);
    cy.get("div:nth-of-type(8) img.-translate-x-1\\/2").click; //It & Eng
    cy.wait(200);
    cy.get("div:nth-of-type(9) img.-translate-x-1\\/2").click; //Law & Consulting
    cy.wait(200);
    cy.get("div:nth-of-type(10) img.-translate-x-1\\/2").click; //product
    cy.wait(200);
    cy.get("div:nth-of-type(11) img.-translate-x-1\\/2").click; //sales & ops
    cy.wait(200);
    cy.get("div.my-9 > div.relative svg").click; //all
    cy.wait(200);
  });

  it('should open mentor page', () => {
    cy.get('a:nth-of-type(1) h4').click; //click on the mentor picture
    cy.wait(200);
    cy.contains('Bi');
    cy.wait(200);
  })

  it('should open mentoring registration popup', () => {
    cy.get('button[type="button"]').click //"Ajukan Jadwal" button
    cy.wait(200);
  });

  it('should select topic sections', () => {
    cy.get('li:nth-of-type(1) img').click //goal setting
    cy.wait(200);
    cy.get('li:nth-of-type(2) img').click //career planning
    cy.wait(200);
    cy.get('li.col-start-1 img').click //communication skills
    cy.wait(200);
    cy.get('div.mt-5 span').click //selanjutnya
    cy.wait(200);
  })
});