import './page.css'
import { SimpleHero } from '@/components'
import { ConsultForm } from './components'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { title } = jsonData.pages.login

export const metadata: Metadata = {
  title: getTitle(title),
}

const SignUp = () => (
  <>
    <SimpleHero title={title} />
    <section className="sign-up section-form">
      <div className="card">
        <ConsultForm />
      </div>
    </section>
  </>
)

export default SignUp