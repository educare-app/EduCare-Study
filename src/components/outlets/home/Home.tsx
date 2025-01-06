import Hero from "./hero/Hero"
import Clients from "./clients/Clients"
import Description from "./description/Description"
import Mobile from "./mobile/Mobile"
import Why from "./why/Why"

import Todo from '../../../assets/dashboard/to-do-list.png'
import Fee from '../../../assets/dashboard/fee.png'
import Accoountancy from '../../../assets/dashboard/accountancy.png'
import Bar from '../../../assets/dashboard/bar-chart.png'
import Bus from '../../../assets/dashboard/bus.png'
import Enrollment from '../../../assets/dashboard/enrollment.png'
import Events from '../../../assets/dashboard/events.png'
import Student from '../../../assets/dashboard/student.png'
import Message from '../../../assets/dashboard/message.png'
import Staff from '../../../assets/dashboard/staffing.png'

import Alumni from '../../../assets/usermanagement/alumni.png'
import Attendence from '../../../assets/usermanagement/attendance.png'
import Boarding from '../../../assets/usermanagement/boarding.png'
import Complaint from '../../../assets/usermanagement/complaint.png'
import Document from '../../../assets/usermanagement/document.png'
import Download from '../../../assets/usermanagement/download.png'
import Employee from '../../../assets/usermanagement/employee.png'
import Feedback from '../../../assets/usermanagement/feedback.png'
import Leave from '../../../assets/usermanagement/leave.png'
import Library from '../../../assets/usermanagement/library.png'

import Inventoryreport from '../../../assets/accountancy/InventoryReport.png'
import Location from '../../../assets/accountancy/LocationWiseProduct.png'
import Collection from '../../../assets/accountancy/collection.png'
import Due from '../../../assets/accountancy/due.png'
import Expenses from '../../../assets/accountancy/expenses.png'
import Inventory from '../../../assets/accountancy/inventory.png'
import Paid from '../../../assets/accountancy/paid.png'
import Payment from '../../../assets/accountancy/payment.png'
import Purchase from '../../../assets/accountancy/purchase.png'
import Sales from '../../../assets/accountancy/sales.png'

import './home.css'

function Home() {

  const dashboard = [Todo, Fee, Accoountancy, Bar, Bus, Enrollment, Events, Student, Message, Staff]

  const usermanagement = [Alumni, Attendence, Boarding, Complaint, Document, Download, Employee, Feedback, Leave, Library]

  const accountancy = [Inventoryreport, Location, Collection, Due, Expenses, Inventory, Paid, Payment, Purchase, Sales]

  console.log(dashboard, usermanagement, accountancy)

  return (
    <main id="main-section">
      <section id="section-two">
        <div id="hero-section">
          <Hero/>
        </div>
      </section>
      <section id="section-third">
        <div id="client-section">
          <Clients/>
        </div>
      </section>
      <section id="section-four">
          <div id="description-one">
            <Description 
              heading="Smart Dashboard for Smarter Management"
              subheading="Everything You Need, at a Glance"
              body="Monitor key metrics, track performance, and access insightful analysis effortlessly. Our dashboard gives you a clear overview of your school’s operations with charts, summaries, and actionable data - all in one place. Simplify decision-making and save time like never before."
              icons={dashboard}
            />
          </div>
          <div id="description-two">
            <Description 
              heading="Comprehensive User Management"
              subheading="Control Every Role, Simplified"
              body="From students to staff, alumni, and beyond-manage every user with ease. Access detailed submenus to handle admissions, attendance, complaints, performance, and more. A complete solution to keep your school community organized and connected."
              icons={usermanagement}
            />
          </div>
          <div id="description-three">
            <Description 
              heading="Streamlined Accountancy Management"
              subheading="Efficient Financial Oversight"
              body="Manage school finances with precision. From fee collection and salary disbursement to expense tracking and financial reports-our accountancy module simplifies it all. Stay on top of your budget with accurate and transparent records."
              icons={accountancy}
            />
          </div>
      </section>
      <section id="section-five">
        <div id="mobile-section">
          <Mobile/>
        </div>
      </section>
      <section id="section-six">
        <div id="why-section">
          <Why/>
        </div>
      </section>
    </main>
  )
}

export default Home