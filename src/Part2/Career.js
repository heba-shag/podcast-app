import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import './part2-style.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Career() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar/>
      <div className="career-container flex">
        <div style={{width:'100%'}} className="main-section flex">
          <div className='text-section flex'>
            <h1 className="title">{t('career.joinUsTitle')}</h1>
            <p className='text'>{t('career.joinUsText')}</p>
          </div>

          <div className='quistion-section flex'>
            <h3 className="title">{t('career.whyWorkTitle')}</h3>
            <p className='text'>{t('career.whyWorkText')}</p>
          </div>
        </div>

        <div className='department-section flex'>
          <div className='department-header flex'>
            <h3 className='department-title'>{t('career.departments')}</h3>
            <h3 className='department-title'>{t('career.openPositions', {count: 16})}</h3>
          </div>

          <div className='section-container flex'>
            <h2 className='section-title flex'>{t('career.departmentsList.engineering')}</h2>
            <div className='section-cards flex'>
              <div className='card flex'>
                <p className='about-text flex'>{t('career.positions.frontendDeveloper')}</p>
                <div className='details flex'>
                  <span className='address'>{t('career.location')}</span>
                  <button className='btn'>{t('career.apply')}</button>
                </div>
              </div>

              <div className='card flex'>
                <p className='about-text flex'>{t('career.positions.backendDeveloper')}</p>
                <div className='details flex'>
                  <span className='address'>{t('career.location')}</span>
                  <button className='btn'>{t('career.apply')}</button>
                </div>
              </div>

              <div className='card flex'>
                <p className='about-text flex'>{t('career.positions.staffSoftwareEngineer')}</p>
                <div className='details flex'>
                  <span className='address'>{t('career.location')}</span>
                  <button className='btn'>{t('career.apply')}</button>
                </div>
              </div>

              <div className='card flex'>
                <p className='about-text flex'>{t('career.positions.iosEngineeringManager')}</p>
                <div className='details flex'>
                  <span className='address'>{t('career.location')}</span>
                  <button className='btn'>{t('career.apply')}</button>
                </div>
              </div>
            </div>
          </div>

          <div className='section-container flex'>
            <h2 className='section-title flex'>{t('career.departmentsList.security')}</h2>
            <div className='section-cards flex'>
              <div className='card flex'>
                <p className='about-text flex'>{t('career.positions.seniorRiskAnalyst')}</p>
                <div className='details flex'>
                  <span className='address'>{t('career.location')}</span>
                  <button className='btn'>{t('career.apply')}</button>
                </div>
              </div>
            </div>
          </div>

          <div className='section-container flex'>
            <h2 className='section-title flex'>{t('career.departmentsList.it')}</h2>
            <div className='section-cards flex'>
              <div className='card flex'>
                <p className='about-text flex'>{t('career.positions.seniorItSupportSpecialist')}</p>
                <div className='details flex'>
                  <span className='address'>{t('career.location')}</span>
                  <button className='btn'>{t('career.apply')}</button>
                </div>
              </div>
            </div>
          </div>

          <div className='section-container flex'>
            <h2 className='section-title flex'>{t('career.departmentsList.product')}</h2>
            <div className='section-cards flex'>
              <div className='card flex'>
                <p className='about-text flex'>{t('career.positions.principalTechnicalProductManager')}</p>
                <div className='details flex'>
                  <span className='address'>{t('career.location')}</span>
                  <button className='btn'>{t('career.apply')}</button>
                </div>
              </div>

              <div className='card flex'>
                <p className='about-text flex'>{t('career.positions.staffProductManager')}</p>
                <div className='details flex'>
                  <span className='address'>{t('career.location')}</span>
                  <button className='btn'>{t('career.apply')}</button>
                </div>
              </div>

              <div className='card flex'>
                <p className='about-text flex'>{t('career.positions.seniorProductDesigner')}</p>
                <div className='details flex'>
                  <span className='address'>{t('career.location')}</span>
                  <button className='btn'>{t('career.apply')}</button>
                </div>
              </div>
            </div>
          </div>

          <div className='section-container flex'>
            <h2 className='section-title flex'>{t('career.departmentsList.marketing')}</h2>
            <div className='section-cards flex'>
              <div className='card flex'>
                <p className='about-text flex'>{t('career.positions.seniorDirectorCampaigns')}</p>
                <div className='details flex'>
                  <span className='address'>{t('career.location')}</span>
                  <button className='btn'>{t('career.apply')}</button>
                </div>
              </div>

              <div className='card flex'>
                <p className='about-text flex'>{t('career.positions.regionalMarketing')}</p>
                <div className='details flex'>
                  <span className='address'>{t('career.location')}</span>
                  <button className='btn'>{t('career.apply')}</button>
                </div>
              </div>
            </div>
          </div>

          <div className='section-container flex'>
            <h2 className='section-title flex'>{t('career.departmentsList.management')}</h2>
            <div className='section-cards flex'>
              <div className='card flex'>
                <p className='about-text flex'>{t('career.positions.principalTechnicalProgramManager')}</p>
                <div className='details flex'>
                  <span className='address'>{t('career.location')}</span>
                  <button className='btn'>{t('career.apply')}</button>
                </div>
              </div>

              <div className='card flex'>
                <p className='about-text flex'>{t('career.positions.staffTechnicalProgramManager')}</p>
                <div className='details flex'>
                  <span className='address'>{t('career.location')}</span>
                  <button className='btn'>{t('career.apply')}</button>
                </div>
              </div>

              <div className='card flex'>
                <p className='about-text flex'>{t('career.positions.socialMediaSpecialist')}</p>
                <div className='details flex'>
                  <span className='address'>{t('career.location')}</span>
                  <button className='btn'>{t('career.apply')}</button>
                </div>
              </div>

              <div className='card flex'>
                <p className='about-text flex'>{t('career.positions.seoSpecialist')}</p>
                <div className='details flex'>
                  <span className='address'>{t('career.location')}</span>
                  <button className='btn'>{t('career.apply')}</button>
                </div>
              </div>
            </div>
          </div>

          <div className='section-container flex'>
            <h2 className='section-title flex'>{t('career.departmentsList.accounting')}</h2>
            <div className='section-cards flex'>
              <div className='card flex'>
                <p className='about-text flex'>{t('career.positions.seniorAccountant')}</p>
                <div className='details flex'>
                  <span className='address'>{t('career.location')}</span>
                  <button className='btn'>{t('career.apply')}</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='contact-section flex'>
          <h2 className='title flex'>{t('career.contact')}</h2>
          <div className='links flex'>
            <Link className='link'>{t('career.contactLinks.support')}</Link>
            <Link className='link'>{t('career.contactLinks.email')}</Link>
            <Link className='link'>{t('career.contactLinks.social')}</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}