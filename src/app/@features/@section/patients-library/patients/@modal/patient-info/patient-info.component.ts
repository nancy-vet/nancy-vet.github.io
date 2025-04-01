import { Component, OnInit, inject } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { PatientDataService } from 'nv@services/patients-data.service';

@Component({
  selector: 'modal--patient-info',
  templateUrl: './patient-info.component.html',
  styleUrl: './patient-info.component.scss'
})
export class PatientInfoModal implements OnInit {

  private modalController: ModalController = inject(ModalController);
  private $patientDataService: PatientDataService = inject(PatientDataService);

  public protocols: any[] = [];
  public selectedObject: any; // The chosen patient
  public patientProtocols: any[] = [];
  public allProtocols: any[] = this.$patientDataService.$protocols().getAllprotocols();

  ngOnInit() {
  this.loadProtocols();

  }

  public loadProtocols() {
    if (!this.selectedObject || !this.selectedObject.protocols) {
      console.warn("⚠️ No protocols found for this patient.");
      return;
    }

    console.log("📋 Selected patient's protocol IDs:", this.selectedObject.protocols);
    console.log("📂 All protocols before filtering:", this.allProtocols);

    // Ensure allProtocols is properly loaded before filtering
    if (!this.allProtocols || !Array.isArray(this.allProtocols)) {
      console.error("❌ Error: allProtocols is undefined or not an array.");
      return;
    }

    // Convert `protocol_number` to string for correct comparison
    this.patientProtocols = this.allProtocols.filter(protocol => {
      if (!protocol || protocol.protocol_number === undefined) {
        console.warn("⚠️ Skipping an undefined or missing protocol:", protocol);
        return false; // Skip this iteration
      }
      return this.selectedObject.protocols.includes(protocol.protocol_number.toString());
    });

    console.log("🔍 Type of protocol IDs in selectedObject:", typeof this.selectedObject?.protocols?.[0]);
    console.log("🔍 Type of protocol numbers in allProtocols:", typeof this.allProtocols?.[0]?.protocol_number);
    console.log("✅ Filtered protocols:", this.patientProtocols);
  }



  onConfirm() {
    this.modalController.dismiss();
  }

  onOpenPdfDocument(url: string) {
    window.open(`assets/${url}`, '_blank')?.focus();
  }

  public selectedProtocol: any = null;

openProtocol(protocol: any) {
  // Toggle protocol details (click again to close)
  this.selectedProtocol = this.selectedProtocol === protocol ? null : protocol;
}
}
