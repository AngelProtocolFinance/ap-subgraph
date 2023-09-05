import { BigInt, log } from "@graphprotocol/graph-ts"
import { EndowmentClosedBeneficiaryDataStruct } from "../../generated/Accounts/Accounts"
import { ClosingBeneficiary, Endowment } from "../../generated/schema"
import { loadUser } from "./loadUser"

export function loadClosingBeneficiary(
    data: EndowmentClosedBeneficiaryDataStruct
): ClosingBeneficiary {
    let beneficiary: ClosingBeneficiary | null

    if (data.endowId.gt(BigInt.zero())) {
        const beneEndow = Endowment.load(data.endowId.toString())
        if (beneEndow == null) {
            log.error("Beneficiary Endowment with ID: '{}' does not exist", [
                data.endowId.toString(),
            ])
        }

        beneficiary = ClosingBeneficiary.load(data.endowId.toString())
        if (beneficiary == null) {
            beneficiary = new ClosingBeneficiary(data.endowId.toString())
            beneficiary.beneficiaryEndowment = data.endowId.toString()
            beneficiary.save()
        }
    } else {
        beneficiary = ClosingBeneficiary.load(data.addr.toHex())
        if (beneficiary == null) {
            beneficiary = new ClosingBeneficiary(data.addr.toHex())
            const beneWallet = loadUser(data.addr)
            beneficiary.beneficiaryWallet = beneWallet.id
            beneficiary.save()
        }
    }

    return beneficiary
}
