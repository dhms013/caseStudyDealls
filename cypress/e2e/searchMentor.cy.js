describe('Search for a mentor',()=>{
  beforeEach(() => {
    cy.visit('/mentoring')
    cy.wait(500)
  });

  it('user directed to website',()=>{
    cy.get('.relative.flex > .gap-3 > .flex').should('contain', 'Dapatkan Mentoring Kehidupan') //header wording
    cy.wait(500)
  });

  it('user search existing mentor name using search bar',()=>{
    cy.get('#searchMentor').type('Cika') //search bar
    cy.wait(500)
    cy.get('[href="/mentoring/cika-143"] > .flex-1 > .border-b > .line-clamp-1').should('have.length.greaterThan', 0) //search result
    cy.wait(500)
    cy.get('[href="/mentoring/cika-143"] > .flex-1 > .border-b > .line-clamp-1').should('contain', 'Cika') //search result
    cy.wait(500)
  })

  it('user search existing mentor career using search bar',()=>{
    cy.get('#searchMentor').type('qa') //search bar
    cy.wait(500)
    cy.get(':nth-child(4) > .mt-4').should('be.visible') //search result
    cy.wait(500)
  })

  it('user search non existing mentor using search bar',()=>{
    cy.get('#searchMentor').type('no mentor') //search bar
    cy.wait(500)
    cy.get('.my-9').should('contain', 'Tidak ada hasil pencarian ditemukan') //search result
    cy.wait(500);
    cy.get('.mt-6').should('be.visible') //lihat semua mentor button
    cy.wait(500)
    cy.get('.mt-6').click() //lihat semua mentor button
    cy.wait(500)
    cy.get('.relative.flex > .gap-3 > .flex').should('contain', 'Dapatkan Mentoring Kehidupan') //header wording
    cy.wait(500)
  })

  it('user click on the career icon options',()=>{
    cy.get('.swiper-slide-next').click() //accounting
    cy.wait(500)
    cy.get(':nth-child(2) > :nth-child(2) > .mx-auto').should('be.visible') //mentor for accounting
    cy.wait(500)
    cy.get('.swiper-wrapper > :nth-child(3)').click() //art & design
    cy.wait(500)
    cy.get(':nth-child(2) > :nth-child(2) > .mx-auto').should('be.visible') //mentor for art & design
    cy.wait(500)
    cy.get('.swiper-wrapper > :nth-child(4)').click() //business
    cy.wait(500)
    cy.get(':nth-child(2) > :nth-child(2) > .mx-auto').should('be.visible') //mentor for business
    cy.wait(500)
    cy.get('.swiper-wrapper > :nth-child(5)').click() //data
    cy.wait(500)
    cy.get(':nth-child(2) > :nth-child(2) > .mx-auto').should('be.visible') //mentor for data
    cy.wait(500)
    cy.get('.swiper-wrapper > :nth-child(6)').click() //finance
    cy.wait(500)
    cy.get(':nth-child(2) > :nth-child(2) > .mx-auto').should('be.visible') //mentor for finance
    cy.wait(500)
    cy.get('.swiper-wrapper > :nth-child(7)').click() //hr
    cy.wait(500)
    cy.get(':nth-child(2) > :nth-child(2) > .mx-auto').should('be.visible') //mentor for hr
    cy.wait(500)
    cy.get('.swiper-wrapper > :nth-child(8)').click() //it & eng
    cy.wait(500)
    cy.get(':nth-child(2) > :nth-child(2) > .mx-auto').should('be.visible') //mentor for it & eng
    cy.wait(500)
    cy.get('.swiper-wrapper > :nth-child(9) > .flex').click() //law & consulting
    cy.wait(500)
    cy.get(':nth-child(2) > :nth-child(2) > .mx-auto').should('be.visible') //mentor for law & consulting
    cy.wait(500)
    cy.get('.swiper-wrapper > :nth-child(10)').click() //product
    cy.wait(500)
    cy.get(':nth-child(2) > :nth-child(2) > .mx-auto').should('be.visible') //mentor for law & consulting
    cy.wait(500)
    cy.get('.swiper-wrapper > :nth-child(11)').click() //sales & ops
    cy.wait(500)
    cy.get(':nth-child(2) > :nth-child(2) > .mx-auto').should('be.visible') //mentor for law & consulting
    cy.wait(500)
    cy.get('.swiper-slide-active').click() //all
    cy.wait(500)
    cy.get(':nth-child(2) > :nth-child(2) > .mx-auto').should('be.visible') //mentor for all career category
    cy.wait(500)
  })

  it('user select mentor, and submit schedule for mentoring', ()=>{
    const generateFullName = () => {
      const firstNames = ['Agus', 'Suparman', 'Adit', 'Putra', 'Putri', 'Yeni', 'Yuni', 'Yani'];
      const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Davis', 'Miller', 'Wilson'];
      const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      return `${randomFirstName} ${randomLastName}`;
    };

    const generateWhatsAppNumber = () => {
      const prefix = '628';
      let number = '';
      for (let i = 0; i < 10; i++) { 
        number += Math.floor(Math.random() * 10);
      }
      return prefix + number;
    };

    const generateEmail = (firstName) => {
      const randomNumber = Math.floor(Math.random() * 1000); 
      return `${firstName}${randomNumber}@yopmail.com`; 
    };

    const fullName = generateFullName();
    const whatsappNumber = generateWhatsAppNumber();
    const firstName = fullName.split(' ')[0];
    const email = generateEmail(firstName);

    cy.get('[href="/mentoring/bi-598"]').click() //open mentor Bi page
    cy.wait(500)
    cy.get('.mb-4').should('contain', 'Bi')
    cy.wait(500)
    cy.get('.mt-3').click() //ajukan jadwal mentor
    cy.wait(500)
    cy.get('.px-5').should('be.visible') //lakukan pendaftaran sesi mentoring popup
    cy.wait(500)
    cy.get('.grid > :nth-child(1) > .relative').click() //click on the goal setting option
    cy.wait(500)
    cy.get('.grid > :nth-child(2) > .relative').click() //click on the career planning option
    cy.wait(500)
    cy.get('.col-start-1 > .relative').click() // click on the communication skills option
    cy.wait(500)
    cy.get('#mentoring-schedule-topic-request-session-btn').click() //click on the selanjutnya button
    cy.wait(500)
    cy.get('.px-5').should('contain', 'Langkah 2 dari 4') //page 2
    cy.wait(500)
    cy.get('.rmdp-container > :nth-child(1) > .h-9').click() //click on the propose date range
    cy.wait(500)
    cy.get('.rmdp-right > .rmdp-arrow').click() //click next month
    cy.wait(500)
    cy.get('[aria-label="Choose Monday June 16 of 2025"] > .sd').click() //click start date
    cy.wait(500)
    cy.get('[aria-label="Choose Friday June 20 of 2025"] > .sd').click() //click until date
    cy.wait(500)
    cy.get('.rmdp-container > :nth-child(1) > .h-9').click() //close date range
    cy.wait(500)
    cy.get('#proposedTimes_0_startTime').type('1300') //proposed start time
    cy.wait(500)
    cy.get('#proposedTimes_0_endTime').type('1700') //proposed end time
    cy.wait(500)
    cy.get('#notes')
      .click()
      .clear()
      .type(`Hi Bi, Saya nama & saya berharap dapat memiliki sesi mentoring dengan Anda.
  
Saat ini, saya tertarik untuk mengejar skill. Tujuan saya untuk sesi ini adalah menambah skill sebagai niai jual saya.

Saya ingin tahu secara khusus tentang :
1.Ketersediaan waktu Bi dengan waktu yang saya propose`, { parseSpecialCharSequences: false })
    cy.wait(500)
    cy.get('#mentoring-schedule-pick-schedule-request-session-btn').click() //click on the selanjutnya button
    cy.wait(500)
    cy.get('.px-5').should('contain', 'Langkah 3 dari 4') //page 3
    cy.wait(500)
    cy.get('#fullName').type(fullName) //fullname
    cy.wait(500)
    cy.get('#whatsapp').type(whatsappNumber) //whatsapp number
    cy.wait(500)
    cy.get('#email').type(email) //email
    cy.wait(500)
    cy.get('#birthDate').type('03/05/1993') //DOB
    cy.wait(500)
    cy.get('#mentoring-schedule-personal-information-request-session-btn').click() //click on the selanjutnya button
    cy.wait(500)
    cy.get('.px-5').should('contain', 'Step 4 of 4') //page 4
    cy.wait(500)
    cy.get('#password').type('password') //password
    cy.wait(500)
    cy.get('#confirmPassword').type('password') //confirm password
    cy.wait(500)
    cy.get(':nth-child(1) > .ant-checkbox-wrapper > :nth-child(2)').click() //checkbox 1
    cy.wait(500)
    cy.get(':nth-child(2) > .ant-checkbox-wrapper > :nth-child(2)').click() //checkbox 2
    cy.wait(500)
    cy.get('#mentoring-schedule-finish-request-session-btn').click() //selesai button
    cy.wait(500)
    cy.get('.ant-modal-body').should('be.visible') //popup mentoring session already sent
    cy.wait(500)
    cy.get('.ant-btn').click() //lihat detailnya button
    cy.wait(500)
    cy.get('.gap-6 > .flex-col > .relative').should('contain',firstName)
    cy.wait(500)
  })
});