import { branches, patients, staff } from '@/lib/data';

const patient = patients[0];

function statusColor(status: string) {
  if (status === 'Verified' || status === 'Available') return 'ok';
  if (status === 'Pending' || status === 'Busy') return 'warn';
  return 'off';
}

export default function DashboardPage() {
  return (
    <main className="page">
      <header className="topbar">
        <div>
          <p className="eyebrow">Dental Hospital Admin Panel</p>
          <h1>Complete Patient Management System</h1>
          <p className="subtitle">From first visit to long-term dental remedy planning across 2 branches and 10 staff members.</p>
        </div>
        <button className="primary">+ Register New Patient</button>
      </header>

      <section className="kpi-grid">
        <article className="card"><h3>Total Branches</h3><p>{branches.length}</p></article>
        <article className="card"><h3>Total Staff</h3><p>{staff.length}</p></article>
        <article className="card"><h3>Active Patients</h3><p>{branches.reduce((sum, b) => sum + b.activePatients, 0)}</p></article>
        <article className="card"><h3>Critical Cases</h3><p>{patients.filter((p) => p.treatmentPriority === 'High').length}</p></article>
      </section>

      <section className="grid two-col">
        <article className="panel">
          <h2>Branch & Staff Management</h2>
          {branches.map((branch) => (
            <div key={branch.id} className="subpanel">
              <h3>{branch.name}</h3>
              <p>{branch.address}</p>
              <p>Staff: {branch.staffCount} · Active Patients: {branch.activePatients}</p>
              <ul>
                {staff
                  .filter((member) => member.branchId === branch.id)
                  .map((member) => (
                    <li key={member.id}>
                      <span>{member.name} ({member.role})</span>
                      <span className={`badge ${statusColor(member.availability)}`}>{member.availability}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </article>

        <article className="panel">
          <h2>Patient Registration + Medical Intake</h2>
          <div className="form-grid">
            <label>Full Name<input value={patient.fullName} readOnly /></label>
            <label>Age<input value={patient.age} readOnly /></label>
            <label>Phone<input value={patient.phone} readOnly /></label>
            <label>Primary Complaint<input value={patient.visits[0].chiefComplaint} readOnly /></label>
            <label>Disease History<textarea value={patient.diseaseHistory.join(', ')} readOnly /></label>
            <label>Allergies<textarea value={patient.allergies.join(', ')} readOnly /></label>
            <label>Current Medication<textarea value={patient.currentMedications.join(', ')} readOnly /></label>
            <label>Dental Chart<textarea value={patient.dentalChartSummary} readOnly /></label>
          </div>
        </article>
      </section>

      <section className="grid two-col">
        <article className="panel">
          <h2>Visit Timeline (First Visit → Follow-ups)</h2>
          <ol className="timeline">
            {patient.visits.map((visit) => (
              <li key={visit.id}>
                <div className="timeline-head">
                  <h3>{visit.date}</h3>
                  <span>{visit.doctor}</span>
                </div>
                <p><strong>Vitals:</strong> BP {visit.vitals.bp}, Pulse {visit.vitals.pulse}, Temp {visit.vitals.tempC}°C, SpO₂ {visit.vitals.oxygen}%</p>
                <p><strong>Problem:</strong> {visit.chiefComplaint}</p>
                <p><strong>Overall Issue:</strong> {visit.diagnosis}</p>
                <p><strong>Need Right Now:</strong> {visit.immediateNeed}</p>
                <p><strong>Future Remedy:</strong> {visit.futureRemedy}</p>
                <p><strong>Next Visit Date:</strong> {visit.followUpDate}</p>
                <p><strong>Procedure Log:</strong> {visit.proceduresDone.join(' • ')}</p>
              </li>
            ))}
          </ol>
        </article>

        <article className="panel">
          <h2>Document Management</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th><th>Type</th><th>Uploaded</th><th>By</th><th>Status</th><th>Tags</th>
              </tr>
            </thead>
            <tbody>
              {patient.documents.map((doc) => (
                <tr key={doc.id}>
                  <td>{doc.id}</td>
                  <td>{doc.type}</td>
                  <td>{doc.uploadedAt}</td>
                  <td>{doc.uploadedBy}</td>
                  <td><span className={`badge ${statusColor(doc.status)}`}>{doc.status}</span></td>
                  <td>{doc.tags.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Advanced Workflow Controls</h3>
          <ul className="workflow-list">
            <li>Automated follow-up reminders based on next visit date.</li>
            <li>Priority queue for emergency pain/infection cases.</li>
            <li>Branch transfer option with full clinical history sync.</li>
            <li>Consent + invoice compliance checklist before procedures.</li>
            <li>Personalized preventive care plan (3, 6, 12 month cycles).</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
