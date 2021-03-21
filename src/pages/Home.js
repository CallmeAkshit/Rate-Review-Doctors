import Header from '../components/header';
import DoctorList from '../components/doctorList';

function Home() {
    return (
        <div>
            <Header />
            <DoctorList name="Dr.Vani"  speciality="Dermatologist, Cosmetologist" details="Dr. Vani is a dermatologist practices at S. S. Skin and Surgical Center, Sanjaynagar. She has an experience of 17 years with her and had been associated with many hospitals and clinics in the past. At present she is also a consultant Dermatologist at S. J. Hospital, Bangalore.

Dr. Vani has actively participated in many conferences in Bangalore and other parts of the country. She also holds the membership of Bangalore Dermatological Society and Indian Association Of Dermatologists, Venereologists and Leprologists (IADVL)." />
            <DoctorList name="Dr. Sheelavathi Natraj" speciality="MBBS, DDVL ,Dermatologist, Cosmetologist" details="Dr. Sheelavathi carries an experience of a decade in the field of cosmetology. Doctor also specializes in treating hair treatments, skin treatments, and STD. She practices at Sapphire Skin and Aesthetic Clinic, which is the state-of-the-art clinic located on the main road of JP Nagar 6th Phase. To get an instant fixed appointment with Dr. Sheela, please use the appointment booking widget below."  />
            <DoctorList  name= "Dr. Arundathi Nagaraj" speciality="MBBS, MD - Dermatology , Venereology & Leprosy,Dermatologist, Aesthetic Dermatologist, Cosmetologist" details="Dr. Arundathi Nagaraj is a Dermatologist,Aesthetic Dermatologist and Cosmetologist in Sahakaranagar, Bangalore and has an experience of 14 years in these fields. Dr. Arundathi Nagaraj practices at Dr. Sculpt Aesthetic Clinic in Sahakaranagar, Bangalore and Dr. Sculpt Aesthetic Clinic in Indiranagar, Bangalore. She completed MBBS from Bangalore Medical College and Research Institute, Bangalore in 2007 and MD - Dermatology , Venereology & Leprosy from Vijayanagara Institute of Medical Sciences (VIMS), Bellary in 2013.

She is a member of Association of Cosmetic Surgeons of India (ACSI) and Indian Association of Dermatologists, Venereologists and Leprologists (IADVL). Some of the services provided by the doctor are: Facial,Chronic Skin Allergy,Ear Lobe Correction / Repair,Lipodissolve Injection and Skin Tag Treatment etc." />
        </div>
    );
}

export default Home;
