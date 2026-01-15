import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SickleCellPage() {
  return (
    <main>
      <Navbar />
      
      {/* Page Title */}
      <section className="pt-32   bg-white">
        <div className="container-max section-padding text-center">
          <h1 className="text-[32px] md:text-[48px] font-bold text-[#212121] font-familjen leading-[110%]">
            Sickle cell disease (SCD)
          </h1>
        </div>
      </section>

      {/* Hero Banner - Just the image */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-max section-padding">
          <div className="relative w-full h-[200px] md:h-[414px] rounded overflow-hidden">
            <Image
              src="/sickle.png"
              alt="Sickle Cell Disease"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#484242] mb-4 font-familjen">
                Introduction
              </h3>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%]">
                Sickle Cell Disease (SCD) is not a single ailment but a group of inherited red blood cell disorders. It is a multi-system condition that affects millions globally, characterized by the production of an abnormal form of hemoglobin, the protein in red blood cells that carries oxygen to the body&apos;s tissues. This guide provides a professional overview of the pathophysiology, genetics, clinical presentation, and management strategies associated with SCD.
              </p>
            </div>

            {/* Pathophysiology */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#484242] mb-4 font-familjen">
                The Biological Foundation: Pathophysiology
              </h3>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-4">
                To understand Sickle Cell Disease, one must first understand the molecular mechanics of the red blood cell (RBC).
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#212121] text-[14px] md:text-[16px] leading-[180%]">
                <li><strong>The Defect:</strong> SCD is caused by a specific mutation in the β-globin gene. This mutation results in the substitution of the amino acid valine for glutamic acid at the 6th position of the beta-globin chain.</li>
                <li><strong>Hemoglobin S (HbS):</strong> The mutation causes an abnormal hemoglobin called hemoglobin S. Under low oxygen conditions, it causes sickle cell hemoglobin (HbS). HbS has a crucial flaw: when it releases oxygen (deoxygenation), it becomes insoluble.</li>
                <li><strong>Polymerization:</strong> Under low oxygen conditions, HbS molecules stick together, forming long, rigid rods (polymers) inside the RBC.</li>
                <li><strong>The Sickling Effect:</strong> These rigid rods distort the RBC from its normal round, flexible, biconcave disc shape into a rigid, sticky, crescent or &quot;sickle&quot; shape.</li>
                <li><strong>The Consequences:</strong> Normal RBCs live for about 120 days and move easily through blood vessels. Sickle cells only live for 10-20 days (causing anemia) and get stuck in small blood vessels, blocking blood flow (vaso-occlusion) and pam.</li>
              </ul>
            </div>

            {/* Anemia Diagram Section */}
            <div className="mb-12">
              <h4 className="text-[18px] md:text-[20px] font-bold text-[#484242] mb-6 font-familjen">
                ANEMIA
              </h4>
              <div className="relative w-full">
                <Image
                  src="/sickle2.png"
                  alt="Anemia - Sickle cell vs Normal red blood cell diagram"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Genetic Inheritance */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#484242] mb-4 font-familjen">
                Genetic Inheritance Patterns
              </h3>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-4">
                SCD is an autosomal recessive disorder. This implies that the inheritance is not linked to the sex chromosomes and requires two copies of the gene to manifest the disease.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#212121] text-[14px] md:text-[16px] leading-[180%]">
                <li><strong>HbAA (Normal):</strong> The individual inherits normal hemoglobin genes from both parents.</li>
                <li><strong>HbAS (Sickle Cell Trait):</strong> The individual inherits one normal gene and one sickle gene. They are generally healthy &quot;carriers&quot; but can pass the gene to their children.</li>
                <li><strong>HbSS (Sickle Cell Anemia):</strong> The individual inherits a sickle cell gene from both parents. This is the most severe form of the disease.</li>
              </ul>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mt-4 italic">
                Note: Genetic counseling is a critical component of care for prospective parents who carry the trait, helping them understand the 25% risk per pregnancy of having a child with HbSS if both parents are carriers.
              </p>
            </div>

            {/* Clinical Manifestations */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#484242] mb-4 font-familjen">
                Clinical Manifestations
              </h3>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-4">
                The clinical signs of SCD vary widely but generally fall into two categories: acute complications and chronic organ damage.
              </p>
              
              <h4 className="text-[16px] md:text-[18px] font-semibold text-[#212121] mb-3">
                Acute Complications
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-6">
                <li><strong>Vaso-Occlusive Crisis (VOC):</strong> The hallmark of SCD. Sickle cells block blood flow to the bones or joints, causing excruciating, sudden pain.</li>
                <li><strong>Acute Chest Syndrome:</strong> A life-threatening complication resembling pneumonia, caused by infection or trapped sickle cells in the lungs.</li>
                <li><strong>Splenic Sequestration:</strong> Sickle cells get trapped in the spleen, causing it to enlarge rapidly and leading to a dangerous drop in hemoglobin.</li>
                <li><strong>Infection Susceptibility:</strong> Because the spleen (which filters bacteria) is often damaged early in life by sickling, patients are highly prone to infections like pneumococcus.</li>
              </ul>

              <h4 className="text-[16px] md:text-[18px] font-semibold text-[#212121] mb-3">
                Chronic Complications
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-[#212121] text-[14px] md:text-[16px] leading-[180%]">
                <li>Over time, the lack of oxygen leads to cumulative damage:</li>
                <li><strong>Renal Failure:</strong> Damage to the kidneys.</li>
                <li><strong>Stroke:</strong> Caused by blockages in cerebral blood vessels.</li>
                <li><strong>Avascular Necrosis:</strong> Bone death due to lack of blood supply, often affecting the hip joints.</li>
                <li><strong>Retinopathy:</strong> Damage to the blood vessels in the eye, potentially leading to blindness.</li>
              </ul>
            </div>

            {/* Therapeutic Strategies */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#9D2227] mb-4 font-familjen">
                Therapeutic Strategies and Management
              </h3>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-4">
                Management of SCD is multidisciplinary, focusing on preventing complications and treating acute episodes.
              </p>

              <h4 className="text-[16px] md:text-[18px] font-semibold text-[#212121] mb-3">
                Preventive (Prophylactic) Care
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-6">
                <li><strong>Hydroxyurea:</strong> A disease-modifying medication that prompts the body to produce Fetal Hemoglobin (HbF). HbF interferes with the polymerization of HbS, preventing the cells from sickling.</li>
                <li><strong>Penicillin Prophylaxis:</strong> Given to young children to prevent severe bacterial infections.</li>
                <li><strong>Vaccinations:</strong> Aggressive immunization schedules are vital to protect immunocompromised patients.</li>
              </ul>

              <h4 className="text-[16px] md:text-[18px] font-semibold text-[#212121] mb-3">
                Acute Management
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-6">
                <li><strong>Hydration:</strong> Dilutes the blood to help unelog vessels.</li>
                <li><strong>Analgesia:</strong> Aggressive pain management (often opioids and NSAIDs) is critical and necessary during a crisis.</li>
                <li><strong>Blood Transfusions:</strong> Used to dilute the amount of HbS in the blood and increase oxygen carrying capacity during severe complications (like stroke or acute chest syndrome).</li>
              </ul>

              <h4 className="text-[16px] md:text-[18px] font-semibold text-[#212121] mb-3">
                Curative Options
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-[#212121] text-[14px] md:text-[16px] leading-[180%]">
                <li><strong>Hematopoietic Stem Cell Transplantation (HSCT):</strong> Currently the only established cure, usually involving a bone marrow transplant from a matched sibling.</li>
                <li><strong>Gene Therapy:</strong> Emerging treatments that aim to genetically modify the patient&apos;s own stem cells to produce healthy hemoglobin.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
