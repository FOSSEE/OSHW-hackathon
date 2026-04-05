const headers = [
  "Theme",
  "Student Name",
  "Institute Name",
  "City",
  "State",
];

function stripHtmlComments(html) {
  return html.replace(/<!--[\s\S]*?-->/g, "").trim();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char] ?? char;
  });
}

function buildTableHead() {
  return `<thead><tr>${headers
    .map((header) => `<th scope="col">${escapeHtml(header)}</th>`)
    .join("")}</tr></thead>`;
}

function normalizeTableHtml(html) {
  const cleaned = stripHtmlComments(html);

  if (!cleaned) {
    return "";
  }

  const tableHead = buildTableHead();

  if (/<table[\s>]/i.test(cleaned)) {
    if (/<thead[\s>]/i.test(cleaned)) {
      return cleaned;
    }

    return cleaned.replace(/<table([^>]*)>/i, `<table$1>${tableHead}`);
  }

  if (/^<tbody[\s>]/i.test(cleaned)) {
    return `<table>${tableHead}${cleaned}</table>`;
  }

  return `<table>${tableHead}<tbody>${cleaned}</tbody></table>`;
}

const championHtml = normalizeTableHtml(String.raw`
<table>
<tbody>
<tr>
<td colspan="1" rowspan="4">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Dhavala Eswar Pavan Teja</td>
<td colspan="1" rowspan="4">
<div>Rajiv Gandhi University Of Knowledge Technologies - Nuzvid</div>
</td>
<td colspan="1" rowspan="4">
<div>Polavaram</div>
</td>
<td colspan="1" rowspan="4">
<div>Andra Pradesh</div>
</td>
</tr>
<tr>
<td>Chappati Tanuja Srilakshmi</td>
</tr>
<tr>
<td>Malisetty Aishwarya</td>
</tr>
<tr>
<td>Aditya Alam</td>
</tr>
</tbody>
</table>
`);

export { headers, championHtml, winnersHtml, notableHtml, participationHtml };

const winnersHtml = normalizeTableHtml(String.raw`
<table>
<tbody>
<tr>
<td colspan="1" rowspan="4">
<div>Energy &amp; Sustainability</div>
</td>
<td>Amogh Bardhan Dash</td>
<td colspan="1" rowspan="4">
<div>Odisha University Of Technology And Research, Bhubaneswar</div>
</td>
<td colspan="1" rowspan="4">
<div>Bhubaneswar</div>
</td>
<td colspan="1" rowspan="4">
<div>Odisha</div>
</td>
</tr>
<tr>
<td>Aditya Priyadarshi Sahoo</td>
</tr>
<tr>
<td>Bighnesh Kumar Das</td>
</tr>
<tr>
<td>Aaron Aryajyoti</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>M Sai Shashank</td>
<td colspan="1" rowspan="5">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="5">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Harshawardhan H</td>
</tr>
<tr>
<td>Jai Sruthi S</td>
</tr>
<tr>
<td>Kaviya M</td>
</tr>
<tr>
<td>Tabeena A</td>
</tr>
<tr>
<td colspan="1" rowspan="3">
<div>Energy &amp; Sustainability</div>
</td>
<td>Ashutosh Dash</td>
<td colspan="1" rowspan="3">
<div>Odisha University Of Technology And Research, Bhubaneswar</div>
</td>
<td colspan="1" rowspan="3">
<div>Bhubaneswar</div>
</td>
<td colspan="1" rowspan="3">
<div>Odisha</div>
</td>
</tr>
<tr>
<td>Swati Samapika Kar</td>
</tr>
<tr>
<td>Hitesh Mishra</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Smart Campus / Smart City</div>
</td>
<td>Kaviyan A</td>
<td colspan="1" rowspan="5">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="5">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Monish Kumar M</td>
</tr>
<tr>
<td>Jayavarshan Rd</td>
</tr>
<tr>
<td>V Rishitharan</td>
</tr>
<tr>
<td>Mari Aravind B</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Arshadh Kumaran G</td>
<td colspan="1" rowspan="4">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="4">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="4">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>N Raadhna</td>
</tr>
<tr>
<td>Sanjay Karthick S</td>
</tr>
<tr>
<td>Shylesh Kumar S</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Vishwar S J</td>
<td colspan="1" rowspan="5">
<div>Sri Sairam Engineering College</div>
</td>
<td colspan="1" rowspan="5">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Deva Kumar M K</td>
</tr>
<tr>
<td>Nadella Lakshmi Uday</td>
</tr>
<tr>
<td>Soorya K</td>
</tr>
<tr>
<td>Sundareshwaran D</td>
</tr>
<tr>
<td>Healthcare &amp; Assistive Devices</td>
<td>F Remi Dayakar</td>
<td>Loyola_Icam College Of Engineering And Technology</td>
<td>Chennai</td>
<td>Tamil Nadu</td>
</tr>
</tbody>
</table>
`);

const notableHtml = normalizeTableHtml(String.raw`
<table>
<tbody>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Yadla Saadwin Anjan</td>
<td colspan="1" rowspan="5">
<div>Narayana Engineering College Nellore</div>
</td>
<td colspan="1" rowspan="5">
<div>Nellore</div>
</td>
<td colspan="1" rowspan="5">
<div>Andhra Pradesh</div>
</td>
</tr>
<tr>
<td>Ratavarapu Keerthi</td>
</tr>
<tr>
<td>Inukurthi Spandana</td>
</tr>
<tr>
<td>Dharwaj Sudhish</td>
</tr>
<tr>
<td>Yadlapalli Venkata Nagasai Deepak Haranadh</td>
</tr>
<tr>
<td colspan="1" rowspan="2">
<div>Smart Campus / Smart City</div>
</td>
<td>Spandan H. Parikh</td>
<td>VVP Engineering College</td>
<td>Rajkot</td>
<td colspan="1" rowspan="2">
<div>Gujarat</div>
</td>
</tr>
<tr>
<td>Meet D. Parekh</td>
<td>Parul Univerisity</td>
<td>Vadodara</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Smart Campus / Smart City</div>
</td>
<td>Jeevan R</td>
<td colspan="1" rowspan="5">
<div>Sreenidhi Institute Of Science And Technology</div>
</td>
<td colspan="1" rowspan="5">
<div>Hydrabad</div>
</td>
<td colspan="1" rowspan="5">
<div>Telengana</div>
</td>
</tr>
<tr>
<td>Sannihith Madasu</td>
</tr>
<tr>
<td>Yuthika Kanthi</td>
</tr>
<tr>
<td>Manchikalapati Visishta</td>
</tr>
<tr>
<td>P Vinay</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Prakatheesh S</td>
<td colspan="1" rowspan="5">
<div>Sri Eshwar College Of Engineering</div>
</td>
<td colspan="1" rowspan="5">
<div>Coimbatore</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Karthick Naveen S</td>
</tr>
<tr>
<td>Maries Hari Bose B</td>
</tr>
<tr>
<td>Mohammed Irfan</td>
</tr>
<tr>
<td>Manoj V</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Thrishna M</td>
<td colspan="1" rowspan="5">
<div>Sri Eshwar College Of Engineering</div>
</td>
<td colspan="1" rowspan="5">
<div>Coimbatore</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Sai Pratheep D</td>
</tr>
<tr>
<td>Dhaarani M</td>
</tr>
<tr>
<td>Dharanish R P</td>
</tr>
<tr>
<td>Shri Ashwanth</td>
</tr>
<tr>
<td colspan="1" rowspan="2">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Praveen Kumar Patel</td>
<td colspan="1" rowspan="2">
<div>VIT Bhopal</div>
</td>
<td colspan="1" rowspan="2">
<div>Indore</div>
</td>
<td colspan="1" rowspan="2">
<div>Madhya Pradesh</div>
</td>
</tr>
<tr>
<td>Sohit Sahu</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Dharshan M</td>
<td colspan="1" rowspan="5">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="5">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Santhosh S</td>
</tr>
<tr>
<td>Adithya P</td>
</tr>
<tr>
<td>Muhammadu Rasheeq Jm</td>
</tr>
<tr>
<td>Udhayakannan P</td>
</tr>
<tr>
<td>Smart Campus / Smart City</td>
<td>Dhirendra Gundre</td>
<td>Vishwakarma Institute Of Technology</td>
<td>Pune</td>
<td>Maharashtra</td>
</tr>
<tr>
<td>Energy &amp; Sustainability</td>
<td>Sarthak Kasar</td>
<td>Vishwakarma Institute Of Technology</td>
<td>Pune</td>
<td>Maharashtra</td>
</tr>
<tr>
<td>Energy &amp; Sustainability</td>
<td>Deepak J</td>
<td>Knowledge Institute Of Technology</td>
<td>Salem</td>
<td>Tamil Nadu</td>
</tr>
<tr>
<td>Smart Campus / Smart City</td>
<td>Chaitanya Nehe</td>
<td>WIT Solapur</td>
<td>Solapur</td>
<td>Maharashtra</td>
</tr>
</tbody>
</table>
`);

const participationHtml = normalizeTableHtml(String.raw`
<table>
<tbody>
<tr>
<td>Smart Campus / Smart City</td>
<td>Shreharini V</td>
<td>Chennai Institute Of Technology</td>
<td>Chennai</td>
<td>Tamil Nadu</td>
</tr>
<tr>
<td>Smart Campus / Smart City</td>
<td>Himanshi Parte</td>
<td>Baderia Global Institute Of Management And Technology</td>
<td>Jabalpur</td>
<td>Madhya Pradesh</td>
</tr>
<tr>
<td>Energy &amp; Sustainability</td>
<td>Pranav Rajeshbhai Prajapati</td>
<td>Sarvajanik College Of Engineering &amp; Technology, Sarvajanik University</td>
<td>Surat</td>
<td>Gujarat</td>
</tr>
<tr>
<td>Energy &amp; Sustainability</td>
<td>Akash.V</td>
<td>Er. Perumal Manimekalai College Of Engineering</td>
<td>Hosur</td>
<td>Tamil Nadu</td>
</tr>
<tr>
<td>Healthcare &amp; Assistive Devices</td>
<td>Ayush Verma</td>
<td>Chandigarh University</td>
<td>Mohali</td>
<td>Punjab</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Smart Campus / Smart City</div>
</td>
<td>Sumit Maheshwari</td>
<td colspan="1" rowspan="4">
<div>Indore Institute Of Science And Technology</div>
</td>
<td colspan="1" rowspan="4">
<div>Indore</div>
</td>
<td colspan="1" rowspan="4">
<div>Madhya Pradesh</div>
</td>
</tr>
<tr>
<td>Suhani Sharma</td>
</tr>
<tr>
<td>Suryansh Ahuja</td>
</tr>
<tr>
<td>Garima Singh</td>
</tr>
<tr>
<td>Healthcare &amp; Assistive Devices</td>
<td>Harshit Singh Negi</td>
<td>VIT Bhopal</td>
<td>Sehore</td>
<td>Madhya Pradesh</td>
</tr>
<tr>
<td>Energy &amp; Sustainability</td>
<td>Pranav Rajeshbhai Prajapati</td>
<td>Sarvajanik College Of Engineering &amp; Trchnology, Sarvajanik University Surat</td>
<td>Surat</td>
<td>Gujarat</td>
</tr>
<tr>
<td>Smart Campus / Smart City</td>
<td>Anora Sharon Tessie S</td>
<td>Sri Sivasubramaniya Nadar College Of Engineering</td>
<td>Chennai</td>
<td>Tamil Nadu</td>
</tr>
<tr>
<td>Smart Campus / Smart City</td>
<td>Priyanshu Kumar</td>
<td>IIT Patna</td>
<td>Dhanbad</td>
<td>Jharkhand</td>
</tr>
<tr>
<td>Healthcare &amp; Assistive Devices</td>
<td>Siddhant Kothiya</td>
<td>VIT Bhopal</td>
<td>Bhopal</td>
<td>Madhya Pradesh</td>
</tr>
<tr>
<td>Healthcare &amp; Assistive Devices</td>
<td>Aman Kumar Singh</td>
<td>VIT Bhopal</td>
<td>Bhopal</td>
<td>Madhya Pradesh</td>
</tr>
<tr>
<td colspan="1" rowspan="2">
<div>Energy &amp; Sustainability</div>
</td>
<td>Susindra Kumar Yadav</td>
<td colspan="1" rowspan="2">
<div>Rajalakshmi Institute Of Technology</div>
</td>
<td colspan="1" rowspan="2">
<div>Tamil Nadu</div>
</td>
<td colspan="1" rowspan="2">
<div>Chennai</div>
</td>
</tr>
<tr>
<td>Antariksh Biswas</td>
</tr>
<tr>
<td>Healthcare &amp; Assistive Devices</td>
<td>Shruti Banik</td>
<td>VIT Bhopal</td>
<td>Sehore</td>
<td>Madhya Pradesh</td>
</tr>
<tr>
<td colspan="1" rowspan="3">
<div>Energy &amp; Sustainability</div>
</td>
<td>Dipankar Jha</td>
<td colspan="1" rowspan="3">
<div>Bit Sindri</div>
</td>
<td colspan="1" rowspan="3">
<div>Dhanbad</div>
</td>
<td colspan="1" rowspan="3">
<div>Jharkhand</div>
</td>
</tr>
<tr>
<td>Abhishek Dubey</td>
</tr>
<tr>
<td>Prince Kumar Singh</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Poojaa Sri S</td>
<td colspan="1" rowspan="5">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="5">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Rishivathen C</td>
</tr>
<tr>
<td>Rathish Kumar R</td>
</tr>
<tr>
<td>Dharshini V M</td>
</tr>
<tr>
<td>Nithish Kumar P</td>
</tr>
<tr>
<td colspan="1" rowspan="3">
<div>Energy &amp; Sustainability</div>
</td>
<td>Shanthini S</td>
<td colspan="1" rowspan="3">
<div>Sri Sai Ram Engineering College</div>
</td>
<td colspan="1" rowspan="3">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="3">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Boomiga E R</td>
</tr>
<tr>
<td>Sujithra R</td>
</tr>
<tr>
<td>Healthcare &amp; Assistive Devices</td>
<td>Abhishek Yadav</td>
<td>IIT Patna</td>
<td>Lucknow</td>
<td>Uttar Pradesh</td>
</tr>
<tr>
<td>Energy &amp; Sustainability</td>
<td>Himangshu Goswami</td>
<td>Darrang College</td>
<td>North Lakhimpur</td>
<td>Assam</td>
</tr>
<tr>
<td>Energy &amp; Sustainability</td>
<td>Tuhinsh Sharma</td>
<td>VIT Bhopal</td>
<td>Aligarh</td>
<td>Uttar Pradesh</td>
</tr>
<tr>
<td>Healthcare &amp; Assistive Devices</td>
<td>Sharveshe S S</td>
<td>Chennai Institute Of Technology</td>
<td>Chennai</td>
<td>Tamil Nadu</td>
</tr>
<tr>
<td>Healthcare &amp; Assistive Devices</td>
<td>Hari Narayana</td>
<td>Vellore Institute Of Technology</td>
<td>Amaravati</td>
<td>Andra Pradesh</td>
</tr>
<tr>
<td>Smart Campus / Smart City</td>
<td>Ayan Kar</td>
<td>Narula Institute Of Technology</td>
<td>Kolkata</td>
<td>West Bengal</td>
</tr>
<tr>
<td>Smart Campus / Smart City</td>
<td>Harshita Malekar</td>
<td>YCCE</td>
<td>Nagpur</td>
<td>Maharashtra</td>
</tr>
<tr>
<td>Smart Campus / Smart City</td>
<td>Raj Dwivedi</td>
<td>Srm Institute Of Science And Technology, Ramapuram Campus</td>
<td>Chennai</td>
<td>Tamil Nadu</td>
</tr>
<tr>
<td>Smart Campus / Smart City</td>
<td>Varad Patil</td>
<td>Indian Institute Of Technology Bombay</td>
<td>Mumbai</td>
<td>Maharashtra</td>
</tr>
<tr>
<td>Smart Campus / Smart City</td>
<td>Nexus Smart Campus Managment</td>
<td>Padmabhooshan Vasantdada Patil Institute Of Technology</td>
<td>Pune</td>
<td>Maharashtra</td>
</tr>
<tr>
<td>Smart Campus / Smart City</td>
<td>Nathan Mathews</td>
<td>Manipal Institute Of Technology</td>
<td>Manipal</td>
<td>Karnataka</td>
</tr>
<tr>
<td>Energy &amp; Sustainability</td>
<td>Drishti Choudhary</td>
<td>Vellore Institute Of Technology, Bhopal</td>
<td>Bhopal</td>
<td>Madhya Pradesh</td>
</tr>
<tr>
<td>Healthcare &amp; Assistive Devices</td>
<td>Gajendra Choudhari</td>
<td>Shah And Anchor Kutchi Engeneering College</td>
<td>Mumbai</td>
<td>Maharashtra</td>
</tr>
<tr>
<td>Smart Campus / Smart City</td>
<td>Jubin Das</td>
<td>Central Institute Of Technology Kokrajhar</td>
<td>Kokrajhar</td>
<td>Assam</td>
</tr>
<tr>
<td colspan="1" rowspan="2">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Prithivi Nandore</td>
<td colspan="1" rowspan="2">
<div>Healthcare Professional</div>
</td>
<td colspan="1" rowspan="2">
<div>Jabalpur</div>
</td>
<td colspan="1" rowspan="2">
<div>Madhya Pradesh</div>
</td>
</tr>
<tr>
<td>Kavita Ahirwar</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Energy &amp; Sustainability</div>
</td>
<td>Tharun B S</td>
<td colspan="1" rowspan="5">
<div>Sri Ramakrishna Institute Of Technology</div>
</td>
<td colspan="1" rowspan="5">
<div>Coimbatore</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Alan S</td>
</tr>
<tr>
<td>Shri Abinaya S</td>
</tr>
<tr>
<td>Sanjay V S</td>
</tr>
<tr>
<td>Nandhini T</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Smart Campus / Smart City</div>
</td>
<td>Jaisre K</td>
<td colspan="1" rowspan="5">
<div>Sri Ramakrishna Institute Of Technology</div>
</td>
<td colspan="1" rowspan="5">
<div>Coimbatore</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Krishnakanth J</td>
</tr>
<tr>
<td>Nirupathunga M</td>
</tr>
<tr>
<td>Vineeth Ts</td>
</tr>
<tr>
<td>Kamaleshwaran P</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>G Moukthika Sri Srujana</td>
<td colspan="1" rowspan="4">
<div>Gitam Institute Of Technology</div>
</td>
<td colspan="1" rowspan="4">
<div>Bangalore</div>
</td>
<td colspan="1" rowspan="4">
<div>Karnataka</div>
</td>
</tr>
<tr>
<td>Kunthalapati Sreeya</td>
</tr>
<tr>
<td>K.Sreekar</td>
</tr>
<tr>
<td>Uppala Danush Shankar</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Smart Campus / Smart City</div>
</td>
<td>Ayisha Siddiqa. A</td>
<td colspan="1" rowspan="4">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="4">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="4">
<div>Tamilnadu</div>
</td>
</tr>
<tr>
<td>Rochana. K</td>
</tr>
<tr>
<td>Roshini. K</td>
</tr>
<tr>
<td>Neeraja. M</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Energy &amp; Sustainability</div>
</td>
<td>Kurra Naveen</td>
<td colspan="1" rowspan="4">
<div>Velagapudi Ramakrishna Siddhartha Engineering College</div>
</td>
<td colspan="1" rowspan="4">
<div>Vijayawada</div>
</td>
<td colspan="1" rowspan="4">
<div>Andhra Pradesh</div>
</td>
</tr>
<tr>
<td>N.Ajay Babu</td>
</tr>
<tr>
<td>V.Bhuvaneswari</td>
</tr>
<tr>
<td>M.Venkat Sasank</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Leninsingharam.G</td>
<td colspan="1" rowspan="5">
<div>PSG Institute Of Technology And Applied Research</div>
</td>
<td colspan="1" rowspan="5">
<div>Coimbatore</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Nanthavikraman M S</td>
</tr>
<tr>
<td>Dillimaran K</td>
</tr>
<tr>
<td>Sam Rojes J</td>
</tr>
<tr>
<td>Kamaleshwar K K</td>
</tr>
<tr>
<td colspan="1" rowspan="3">
<div>Energy &amp; Sustainability</div>
</td>
<td>Mohamed Raffi S</td>
<td colspan="1" rowspan="3">
<div>Sri Sairam Institute Of Technology</div>
</td>
<td colspan="1" rowspan="3">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="3">
<div>Tamilnadu</div>
</td>
</tr>
<tr>
<td>Amarnath M</td>
</tr>
<tr>
<td>Dhayanithi M.K</td>
</tr>
<tr>
<td colspan="1" rowspan="3">
<div>Energy &amp; Sustainability</div>
</td>
<td>Bohni Sikha Dey</td>
<td colspan="1" rowspan="3">
<div>Central Institute Of Technology Kokrajhar</div>
</td>
<td colspan="1" rowspan="3">
<div>Kokrajhar</div>
</td>
<td colspan="1" rowspan="3">
<div>Assam</div>
</td>
</tr>
<tr>
<td>Pratyansha Kashyap Baishya</td>
</tr>
<tr>
<td>Arliz Hanna Basumatari</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Smart Campus / Smart City</div>
</td>
<td>P.Santhi</td>
<td colspan="1" rowspan="5">
<div>Bapatla Women'S Engineering College</div>
</td>
<td colspan="1" rowspan="5">
<div>Bapatla</div>
</td>
<td colspan="1" rowspan="5">
<div>Andhra Pradesh</div>
</td>
</tr>
<tr>
<td>Y.Naga Jyothi</td>
</tr>
<tr>
<td>V,Lakshmi</td>
</tr>
<tr>
<td>D.Mani Deepthi</td>
</tr>
<tr>
<td>B.Aprna Mastani</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Energy &amp; Sustainability</div>
</td>
<td>Anumita Samaddar</td>
<td colspan="1" rowspan="4">
<div>IIEST Shibpur</div>
</td>
<td colspan="1" rowspan="4">
<div>Howrah</div>
</td>
<td colspan="1" rowspan="4">
<div>West Bengal</div>
</td>
</tr>
<tr>
<td>Shama Afreen</td>
</tr>
<tr>
<td>Shubham Pal</td>
</tr>
<tr>
<td>Deganga</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Smart Campus / Smart City</div>
</td>
<td>Diwakar P</td>
<td>Panimalar Engineering College</td>
<td>Kanchipuram</td>
<td>Tamil Nadu</td>
</tr>
<tr>
<td>S.Harish</td>
<td>Saveetha School Of Engineering</td>
<td>Chennai</td>
<td>Tamil Nadu</td>
</tr>
<tr>
<td>M.Santosh</td>
<td>Saveetha School Of Engineering</td>
<td>Chennai</td>
<td>Tamil Nadu</td>
</tr>
<tr>
<td>G.Balasubramanian</td>
<td>Saveetha School Of Engineering</td>
<td>Chennai</td>
<td>Tamil Nadu</td>
</tr>
<tr>
<td>Aravind Eswar K S</td>
<td>Rajalakshmi Engineering College</td>
<td>Kanchipuram</td>
<td>Tamil Nadu</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Smart Campus / Smart City</div>
</td>
<td>S Venkata Shiva Lokesh Reddy</td>
<td colspan="1" rowspan="4">
<div>Vellore Institute Of Technology</div>
</td>
<td>Nandyal</td>
<td colspan="1" rowspan="4">
<div>Andhra Pradesh</div>
</td>
</tr>
<tr>
<td>Kutikuppala Chetan Srinivas</td>
<td>Srikakulam</td>
</tr>
<tr>
<td>Oleti Sreevathsa</td>
<td>Dharmavaram</td>
</tr>
<tr>
<td>Pv Krishna Yasaswi</td>
<td>Vishakapatnam</td>
</tr>
<tr>
<td colspan="1" rowspan="2">
<div>Smart Campus / Smart City</div>
</td>
<td>Nandni Nirmal</td>
<td colspan="1" rowspan="2">
<div>VIT Bhopal</div>
</td>
<td colspan="1" rowspan="2">
<div>Bhopal</div>
</td>
<td colspan="1" rowspan="2">
<div>Madhya Pradesh</div>
</td>
</tr>
<tr>
<td>Isha Goyal</td>
</tr>
<tr>
<td colspan="1" rowspan="2">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Rishik Jariwala</td>
<td colspan="1" rowspan="2">
<div>SVKM Shri Bhagubhai Mafatlal Polytechnic And College Of Engineering</div>
</td>
<td colspan="1" rowspan="2">
<div>Mumbai</div>
</td>
<td colspan="1" rowspan="2">
<div>Maharashtra</div>
</td>
</tr>
<tr>
<td>Nirmay Patel</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Archana H</td>
<td colspan="1" rowspan="4">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="4">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="4">
<div>Tamilnadu</div>
</td>
</tr>
<tr>
<td>Mahalakshmi J</td>
</tr>
<tr>
<td>Kavya Priya S</td>
</tr>
<tr>
<td>S Sreenidhi</td>
</tr>
<tr>
<td colspan="1" rowspan="3">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Aurosmita Sahoo</td>
<td colspan="1" rowspan="3">
<div>Centurion University Of Technology And Management Bhubaneswar</div>
</td>
<td colspan="1" rowspan="3">
<div>Bhubaneswar</div>
</td>
<td colspan="1" rowspan="3">
<div>Odisha</div>
</td>
</tr>
<tr>
<td>Laxmipriya Rout</td>
</tr>
<tr>
<td>Disha Agarwalla</td>
</tr>
<tr>
<td colspan="1" rowspan="2">
<div>Smart Campus / Smart City</div>
</td>
<td>Shivam Kumar Gupta</td>
<td>Ganga Institute Of Technology &amp; Management</td>
<td>Delhi</td>
<td>Delhi</td>
</tr>
<tr>
<td>Jahnavi Chaurasia</td>
<td>Feroze Gandhi Institute Of Engineering And Technology</td>
<td>Raebareli</td>
<td>Uttar Pradesh</td>
</tr>
<tr>
<td colspan="1" rowspan="2">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Nilay Nandimath</td>
<td colspan="1" rowspan="2">
<div>Pm Shri Kv Balrampur</div>
</td>
<td colspan="1" rowspan="2">
<div>Pune</div>
</td>
<td colspan="1" rowspan="2">
<div>Maharashtra</div>
</td>
</tr>
<tr>
<td>Tapan Sanjeevkumar Gupta</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Smart Campus / Smart City</div>
</td>
<td>Kavin.V</td>
<td colspan="1" rowspan="5">
<div>Sri Eshwar College Of Engineering</div>
</td>
<td colspan="1" rowspan="5">
<div>Coimbatore</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamilnadu</div>
</td>
</tr>
<tr>
<td>Kavin Kumar</td>
</tr>
<tr>
<td>Krishna Kand S</td>
</tr>
<tr>
<td>Arun Kumar P</td>
</tr>
<tr>
<td>Kiruthic E T</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Smart Campus / Smart City</div>
</td>
<td>Murugan U</td>
<td colspan="1" rowspan="5">
<div>Rajalakshmi Institute Of Technology</div>
</td>
<td colspan="1" rowspan="5">
<div>Kanchipuram</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamilnadu</div>
</td>
</tr>
<tr>
<td>Arjun Em</td>
</tr>
<tr>
<td>Gnaneshwar R</td>
</tr>
<tr>
<td>Logesh B</td>
</tr>
<tr>
<td>Yuvasree P</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Smart Campus / Smart City</div>
</td>
<td>Sujal Giri</td>
<td>Shambhunath Institute Of Engineering And Technology, Prayagraj</td>
<td>Prayagraj</td>
<td colspan="1" rowspan="5">
<div>Uttar Pradesh</div>
</td>
</tr>
<tr>
<td>Hanshika Srivastava</td>
<td>Shambhunath Institute Of Engineering And Technology, Prayagraj</td>
<td>Prayagraj</td>
</tr>
<tr>
<td>Hariom Chandra Tripathi</td>
<td>Indian Institute Of Technology Patna</td>
<td>Sonbhadra</td>
</tr>
<tr>
<td>Aradhya Srivastava</td>
<td>Indian Institute Of Technology Patna</td>
<td>Prayagraj</td>
</tr>
<tr>
<td>Munni Kumari</td>
<td>Shambhunath Institute Of Engineering And Technology, Prayagraj</td>
<td>Prayagraj</td>
</tr>
<tr>
<td colspan="1" rowspan="2">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Aaradhya Sharma</td>
<td colspan="1" rowspan="2">
<div>Vellore Institute Of Technology</div>
</td>
<td>Kanpur</td>
<td>Uttar Pradesh</td>
</tr>
<tr>
<td>Thakur Akshaykumar Raj</td>
<td>Patna</td>
<td>Bihar</td>
</tr>
<tr>
<td>Healthcare &amp; Assistive Devices</td>
<td>Tanmay Sharma</td>
<td>Vellore Institute Of Technology</td>
<td>Punjab</td>
<td>Chandigarh</td>
</tr>
<tr>
<td colspan="1" rowspan="3">
<div>Smart Campus / Smart City</div>
</td>
<td>Rishabh Jain</td>
<td colspan="1" rowspan="3">
<div>Jaypee University Of Engineering &amp; Technology</div>
</td>
<td colspan="1" rowspan="3">
<div>Guna</div>
</td>
<td colspan="1" rowspan="3">
<div>Madhya Pradesh</div>
</td>
</tr>
<tr>
<td>Sagar Seth</td>
</tr>
<tr>
<td>Siddhant Vashisth</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Aswin Joe E</td>
<td colspan="1" rowspan="5">
<div>St. Xavier&rsquo;S Catholic College Of Engineering</div>
</td>
<td colspan="1" rowspan="5">
<div>Nagercoil</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Mohammed Niyash S</td>
</tr>
<tr>
<td>Akash A</td>
</tr>
<tr>
<td>Jeofrin J M</td>
</tr>
<tr>
<td>Dr. J. Leon Bosco Raj</td>
</tr>
<tr>
<td colspan="1" rowspan="3">
<div>Energy &amp; Sustainability</div>
</td>
<td>Vaishnavi Sanjay Shirsat</td>
<td colspan="1" rowspan="3">
<div>Walchand College Of Engineering Sangli</div>
</td>
<td colspan="1" rowspan="3">
<div>Sangli</div>
</td>
<td colspan="1" rowspan="3">
<div>Maharastra</div>
</td>
</tr>
<tr>
<td>Samartha Gavli</td>
</tr>
<tr>
<td>Shrinivas Kulkarni</td>
</tr>
<tr>
<td colspan="1" rowspan="2">
<div>Smart Campus / Smart City</div>
</td>
<td>Krishna Radheshyam Prajapati</td>
<td colspan="1" rowspan="2">
<div>B.G.P.S. Mumbai College, University Of Mumbai, India</div>
</td>
<td colspan="1" rowspan="2">
<div>Mumbai</div>
</td>
<td colspan="1" rowspan="2">
<div>Maharashtra</div>
</td>
</tr>
<tr>
<td>Suraj Chandraram Sahani</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Elijah Timothy Peter</td>
<td colspan="1" rowspan="4">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="4">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="4">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Hemachandran S</td>
</tr>
<tr>
<td>K R Arivazhagan</td>
</tr>
<tr>
<td>Nithish Kumara V</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Smart Campus / Smart City</div>
</td>
<td>Jayesh Dnyaneshwar Sapkale</td>
<td colspan="1" rowspan="5">
<div>JSPM Jayawantrao Sawant College Of Engineering</div>
</td>
<td colspan="1" rowspan="5">
<div>Pune</div>
</td>
<td colspan="1" rowspan="5">
<div>Maharashtra</div>
</td>
</tr>
<tr>
<td>Nikhil Balasaheb Jarkad</td>
</tr>
<tr>
<td>Mandar Madhukar Gaikwad</td>
</tr>
<tr>
<td>Harsh Nitin Shinde</td>
</tr>
<tr>
<td>Pratik Shankar Walunj</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Smart Campus / Smart City</div>
</td>
<td>Harshita Thakur</td>
<td colspan="1" rowspan="5">
<div>Baderia Global Institute Of Engineering And Management</div>
</td>
<td colspan="1" rowspan="5">
<div>Jabalpur</div>
</td>
<td colspan="1" rowspan="5">
<div>Madhya Pradesh</div>
</td>
</tr>
<tr>
<td>Mahak Thakur</td>
</tr>
<tr>
<td>Muskan Rajak</td>
</tr>
<tr>
<td>Ankita Kol</td>
</tr>
<tr>
<td>Mahi Namdev</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>G Shireesha</td>
<td colspan="1" rowspan="5">
<div>BVRIT Hyderabad College Of Engineering For Women</div>
</td>
<td colspan="1" rowspan="5">
<div>Hyderabad</div>
</td>
<td colspan="1" rowspan="5">
<div>Telangana</div>
</td>
</tr>
<tr>
<td>K Sindu Sree</td>
</tr>
<tr>
<td>M Sai Varshini</td>
</tr>
<tr>
<td>Ch Sanjana</td>
</tr>
<tr>
<td>R Kavya Naga Sai Sri</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Nishiithaa G</td>
<td colspan="1" rowspan="4">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="4">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="4">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Suprit G</td>
</tr>
<tr>
<td>Vishal A M</td>
</tr>
<tr>
<td>Kesava Ranjith R</td>
</tr>
<tr>
<td colspan="1" rowspan="3">
<div>Smart Campus / Smart City</div>
</td>
<td>Kaarthik Krishnan S</td>
<td colspan="1" rowspan="3">
<div>Knowledge Institute Of Techonology</div>
</td>
<td colspan="1" rowspan="3">
<div>Salem</div>
</td>
<td colspan="1" rowspan="3">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Sachin J P</td>
</tr>
<tr>
<td>Swathy Sree K</td>
</tr>
<tr>
<td colspan="1" rowspan="3">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>L.G. Dhesikaa</td>
<td colspan="1" rowspan="3">
<div>King College Of Engineering</div>
</td>
<td colspan="1" rowspan="3">
<div>Thanjavur</div>
</td>
<td colspan="1" rowspan="3">
<div>Tamilnadu</div>
</td>
</tr>
<tr>
<td>A. Ashviniya</td>
</tr>
<tr>
<td>S.Hariharan</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>S Afrah Thanseem</td>
<td colspan="1" rowspan="4">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="4">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="4">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Mohanapriya V</td>
</tr>
<tr>
<td>Adlin Ahisha S</td>
</tr>
<tr>
<td>Vijayalakshmi N</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Rithik A</td>
<td colspan="1" rowspan="5">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="5">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Anntrin Joe Crison W</td>
</tr>
<tr>
<td>Sridhar S</td>
</tr>
<tr>
<td>Dheebavizhiyan Velvizhi Gopinath</td>
</tr>
<tr>
<td>Poovarasan N</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Shubhdeep Singh</td>
<td colspan="1" rowspan="5">
<div>VIT Bhopal</div>
</td>
<td colspan="1" rowspan="5">
<div>Bhopal</div>
</td>
<td colspan="1" rowspan="5">
<div>Madhya Pradesh</div>
</td>
</tr>
<tr>
<td>Oaj Borwankar</td>
</tr>
<tr>
<td>Pv Rohan</td>
</tr>
<tr>
<td>Krish Gursahani</td>
</tr>
<tr>
<td>Anuraag Singh</td>
</tr>
<tr>
<td colspan="1" rowspan="3">
<div>Energy &amp; Sustainability</div>
</td>
<td>Akhilesh M</td>
<td colspan="1" rowspan="3">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="3">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="3">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Sabari Saravanan T S</td>
</tr>
<tr>
<td>Tharun Pranav S R</td>
</tr>
<tr>
<td colspan="1" rowspan="2">
<div>Smart Campus / Smart City</div>
</td>
<td>Akshita Sondhi</td>
<td colspan="1" rowspan="2">
<div>IIIT-NR</div>
</td>
<td colspan="1" rowspan="2">
<div>Raipur</div>
</td>
<td colspan="1" rowspan="2">
<div>Chhattisgarh</div>
</td>
</tr>
<tr>
<td>Ekansh Arohi</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>S Niveditha</td>
<td colspan="1" rowspan="5">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="5">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Sharmila S</td>
</tr>
<tr>
<td>Shreemathi N D</td>
</tr>
<tr>
<td>Deepika S</td>
</tr>
<tr>
<td>Divyadarshini K</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Smart Campus / Smart City</div>
</td>
<td>Nishad Patil</td>
<td colspan="1" rowspan="5">
<div>MIT-WPU Kothrud</div>
</td>
<td colspan="1" rowspan="5">
<div>Pune</div>
</td>
<td colspan="1" rowspan="5">
<div>Maharashtra</div>
</td>
</tr>
<tr>
<td>Devdatta Shahane</td>
</tr>
<tr>
<td>Sandesh Kotwal</td>
</tr>
<tr>
<td>Sai Chavan</td>
</tr>
<tr>
<td>Arnav Awatipatil</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Praveen R</td>
<td colspan="1" rowspan="5">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="5">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Senbagaseelan V</td>
</tr>
<tr>
<td>Ragul T</td>
</tr>
<tr>
<td>Tharunbabu V</td>
</tr>
<tr>
<td>Dhinekka B</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Lavanya G</td>
<td colspan="1" rowspan="5">
<div>Sri Ramakrishna Engineering College</div>
</td>
<td colspan="1" rowspan="5">
<div>Coimbatore</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Rajalakshmi P</td>
</tr>
<tr>
<td>Rakshana R</td>
</tr>
<tr>
<td>Sridarshan A</td>
</tr>
<tr>
<td>Surendar V</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Smart Campus / Smart City</div>
</td>
<td>R Ashwin</td>
<td colspan="1" rowspan="5">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="5">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Raghul J L</td>
</tr>
<tr>
<td>S Santosh</td>
</tr>
<tr>
<td>Nethrasri R</td>
</tr>
<tr>
<td>Nithin R</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Roslin Jeronshiya D</td>
<td colspan="1" rowspan="4">
<div>Chettinad College Of Engineering And Technology</div>
</td>
<td colspan="1" rowspan="4">
<div>Karur</div>
</td>
<td colspan="1" rowspan="4">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Tharanika N</td>
</tr>
<tr>
<td>Hiriseeka N</td>
</tr>
<tr>
<td>Girija R</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Manishankar M</td>
<td colspan="1" rowspan="5">
<div>Sri Ramakrishna Engineering College</div>
</td>
<td colspan="1" rowspan="5">
<div>Coimbatore</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Praveen Kumar P</td>
</tr>
<tr>
<td>Vigneshkumar G</td>
</tr>
<tr>
<td>Vishwadharani V</td>
</tr>
<tr>
<td>Rochitha P</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Jayaraj M</td>
<td colspan="1" rowspan="5">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="5">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Ashwin R</td>
</tr>
<tr>
<td>Vishal Meyyappan R</td>
</tr>
<tr>
<td>Kishore V S</td>
</tr>
<tr>
<td>Lokesh R</td>
</tr>
<tr>
<td colspan="1" rowspan="3">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Manikandan C</td>
<td colspan="1" rowspan="3">
<div>Sri Ramakrishna Engineering College</div>
</td>
<td colspan="1" rowspan="3">
<div>Coimbatore</div>
</td>
<td colspan="1" rowspan="3">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Dhanayakumar S</td>
</tr>
<tr>
<td>Dhayaan B</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Girija R</td>
<td colspan="1" rowspan="4">
<div>Chettinad College Of Engineering And Technology</div>
</td>
<td colspan="1" rowspan="4">
<div>Karur</div>
</td>
<td colspan="1" rowspan="4">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Hiriseeka N</td>
</tr>
<tr>
<td>Roslin Jeronshiya D</td>
</tr>
<tr>
<td>Tharanika N</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Energy &amp; Sustainability</div>
</td>
<td>Cynthia C</td>
<td colspan="1" rowspan="5">
<div>St. Xavier'S Catholic College Of Engineering</div>
</td>
<td colspan="1" rowspan="5">
<div>Nagercoil</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Subin.S</td>
</tr>
<tr>
<td>Angelo Vibin.V</td>
</tr>
<tr>
<td>Senthilathieban .A</td>
</tr>
<tr>
<td>Akash S.V</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Smart Campus / Smart City</div>
</td>
<td>Mukkamala Sai Varuntej</td>
<td colspan="1" rowspan="5">
<div>Raghu Engineering College</div>
</td>
<td colspan="1" rowspan="5">
<div>Visakhapatnam</div>
</td>
<td colspan="1" rowspan="5">
<div>Andhra Pradesh</div>
</td>
</tr>
<tr>
<td>R.V.M.S.Varun Swamy</td>
</tr>
<tr>
<td>Gompa Jayanth</td>
</tr>
<tr>
<td>Bhagi Praneel Reddy</td>
</tr>
<tr>
<td>Bura Charan Sai</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Energy &amp; Sustainability</div>
</td>
<td>Saisubramani H S</td>
<td colspan="1" rowspan="4">
<div>Sri Sairam Institute Of Technology</div>
</td>
<td colspan="1" rowspan="4">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="4">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Iyyneswaran P</td>
</tr>
<tr>
<td>Naugeeth P</td>
</tr>
<tr>
<td>Shubham Kumar</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Prashant Dubey</td>
<td colspan="1" rowspan="5">
<div>VIT Bhopal</div>
</td>
<td colspan="1" rowspan="5">
<div>Bhopal</div>
</td>
<td colspan="1" rowspan="5">
<div>Madhya Pradesh</div>
</td>
</tr>
<tr>
<td>Jihi Mamtani</td>
</tr>
<tr>
<td>Deshna Jain</td>
</tr>
<tr>
<td>Sahil Dalwani</td>
</tr>
<tr>
<td>Palak Choithani</td>
</tr>
<tr>
<td colspan="1" rowspan="3">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Shreesh Prateek Pathak</td>
<td colspan="1" rowspan="3">
<div>VIT Vellore</div>
</td>
<td>Raipur</td>
<td>Chhattisgarh</td>
</tr>
<tr>
<td>Soumyajit Pal</td>
<td>Kolkata</td>
<td>West Bengal</td>
</tr>
<tr>
<td>Hriddhi Biswas</td>
<td>Agartala</td>
<td>Tripura</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Vasudev R</td>
<td colspan="1" rowspan="4">
<div>Chennai Institiute Of Technology</div>
</td>
<td colspan="1" rowspan="4">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="4">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>G Dhiikshanyaa</td>
</tr>
<tr>
<td>Dhanush U</td>
</tr>
<tr>
<td>Kaushick U</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Smart Campus / Smart City</div>
</td>
<td>Ravindhar M</td>
<td colspan="1" rowspan="5">
<div>Chennai Institute Of Technology</div>
</td>
<td colspan="1" rowspan="5">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Sanjay S</td>
</tr>
<tr>
<td>Ramaprakash B</td>
</tr>
<tr>
<td>Keshav N</td>
</tr>
<tr>
<td>Tamilmani S</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Palaniraj M</td>
<td colspan="1" rowspan="4">
<div>Chennai In Institute Technology</div>
</td>
<td colspan="1" rowspan="4">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="4">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Krisanth M</td>
</tr>
<tr>
<td>Hari Hara Sudhan R</td>
</tr>
<tr>
<td>F Mohamed Zayn Ismail</td>
</tr>
<tr>
<td colspan="1" rowspan="3">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Saisubramani H S</td>
<td colspan="1" rowspan="3">
<div>Sri Sairam Institute Of Technology</div>
</td>
<td colspan="1" rowspan="3">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="3">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Sarvesvar S</td>
</tr>
<tr>
<td>Iyyneswaran P</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Smart Campus / Smart City</div>
</td>
<td>Aadidev Raizada</td>
<td colspan="1" rowspan="4">
<div>Mukesh Patel School Of Technology Management And Engineering</div>
</td>
<td colspan="1" rowspan="4">
<div>Mumbai</div>
</td>
<td colspan="1" rowspan="4">
<div>Maharashtra</div>
</td>
</tr>
<tr>
<td>Kush Modi</td>
</tr>
<tr>
<td>Pratham Baldewa</td>
</tr>
<tr>
<td>Aadarsh Suryawanshi</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Smart Campus / Smart City</div>
</td>
<td>Manikandan R</td>
<td colspan="1" rowspan="4">
<div>Loyola-Icam College Of Engineering And Technology</div>
</td>
<td colspan="1" rowspan="4">
<div>Chennai</div>
</td>
<td colspan="1" rowspan="4">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Arun Kumar M P</td>
</tr>
<tr>
<td>Kumudha Shree B</td>
</tr>
<tr>
<td>Jenlin Anne Flora J</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Smart Campus / Smart City</div>
</td>
<td>Sarang Patil</td>
<td colspan="1" rowspan="4">
<div>SIES Graduate School Of Technology</div>
</td>
<td colspan="1" rowspan="4">
<div>Navi Mumbai</div>
</td>
<td colspan="1" rowspan="4">
<div>Maharashtra</div>
</td>
</tr>
<tr>
<td>Atharva Bendale</td>
</tr>
<tr>
<td>Ratish Patil</td>
</tr>
<tr>
<td>Amey Khapre</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Energy &amp; Sustainability</div>
</td>
<td>Padavala Tarun Kumar</td>
<td colspan="1" rowspan="5">
<div>Siddhartha Academy Of Higher Education</div>
</td>
<td colspan="1" rowspan="5">
<div>Vijayawada</div>
</td>
<td colspan="1" rowspan="5">
<div>Andhra Pradesh</div>
</td>
</tr>
<tr>
<td>Pedaveghi Teja Sai Naga Kumar</td>
</tr>
<tr>
<td>Mudigonda Bharath Kumar</td>
</tr>
<tr>
<td>Tammu Raghava Raju</td>
</tr>
<tr>
<td>Varshitha Yalamarthi</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Tharanika N</td>
<td colspan="1" rowspan="4">
<div>Chettinad College Of Engineering And Technology</div>
</td>
<td colspan="1" rowspan="4">
<div>Karur</div>
</td>
<td colspan="1" rowspan="4">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Girija R</td>
</tr>
<tr>
<td>Hiriseeka N</td>
</tr>
<tr>
<td>Roslin Jeronshiya D</td>
</tr>
<tr>
<td colspan="1" rowspan="3">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Devarth Dubey</td>
<td colspan="1" rowspan="3">
<div>Central Institute Of Technology</div>
</td>
<td colspan="1" rowspan="3">
<div>Kokrajhar</div>
</td>
<td colspan="1" rowspan="3">
<div>Assam</div>
</td>
</tr>
<tr>
<td>Govind Kumar Prajapati</td>
</tr>
<tr>
<td>Antaryami Panigrahi</td>
</tr>
<tr>
<td colspan="1" rowspan="4">
<div>Healthcare &amp; Assistive Devices</div>
</td>
<td>Praveen Kanth P</td>
<td colspan="1" rowspan="4">
<div>Sri Eshwar College Of Engineering</div>
</td>
<td colspan="1" rowspan="4">
<div>Coimbatore</div>
</td>
<td colspan="1" rowspan="4">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Navya M</td>
</tr>
<tr>
<td>Kiruthic T</td>
</tr>
<tr>
<td>Mayilpriyan S</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Smart Campus / Smart City</div>
</td>
<td>Murugan U</td>
<td colspan="1" rowspan="5">
<div>Rajalakshmi Institute Of Technology</div>
</td>
<td colspan="1" rowspan="5">
<div>Kanchipuram</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Gnaneshwar R</td>
</tr>
<tr>
<td>Logesh B</td>
</tr>
<tr>
<td>Arjun Em</td>
</tr>
<tr>
<td>Yuvasree P</td>
</tr>
<tr>
<td colspan="1" rowspan="2">
<div>Smart Campus / Smart City</div>
</td>
<td>Bhuvan Bagwe</td>
<td>Air Calibre</td>
<td colspan="1" rowspan="2">
<div>Mumbai</div>
</td>
<td colspan="1" rowspan="2">
<div>Maharashtra</div>
</td>
</tr>
<tr>
<td>Yash Shah</td>
<td>D J Sanghvi College Of Engineering</td>
</tr>
<tr>
<td colspan="1" rowspan="5">
<div>Energy &amp; Sustainability</div>
</td>
<td>Aatheesh</td>
<td colspan="1" rowspan="5">
<div>Sri Ramakrishna Engineering College</div>
</td>
<td colspan="1" rowspan="5">
<div>Coimbatore</div>
</td>
<td colspan="1" rowspan="5">
<div>Tamil Nadu</div>
</td>
</tr>
<tr>
<td>Vijayabharathi N</td>
</tr>
<tr>
<td>Kowshikan A</td>
</tr>
<tr>
<td>Vishnu Varthan S</td>
</tr>
<tr>
<td>Gowri Shankar R</td>
</tr>
</tbody>
</table>
`);
