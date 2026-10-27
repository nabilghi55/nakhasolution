import type { SystemNode } from "@/content/pos-pages";
import { SectionHead } from "@/components/pos/PosSections";

function Node({ node, className = "" }: { node: SystemNode; className?: string }) {
  return (
    <div className={`pos-node ${className}`}>
      <span className="pos-index">{node.code}</span>
      <h3>{node.title}</h3>
      <p>{node.body}</p>
    </div>
  );
}

interface ModuleMapProps {
  kicker: string;
  inputs: SystemNode[];
  hub: SystemNode;
  devices: SystemNode[];
  outputs: SystemNode[];
  access: SystemNode;
}

/** Cashier at the centre, data feeding in from the left, reports leaving on the right, access rules framing all of it. */
export function ModuleMap({ kicker, inputs, hub, devices, outputs, access }: ModuleMapProps) {
  return (
    <section className="detail-section pos-map-section" aria-labelledby="pos-map-title">
      <div className="detail-shell">
        <SectionHead
          kicker={kicker}
          title="Peta modul: apa saja yang terhubung ke kasir"
          id="pos-map-title"
          intro="Setiap modul dapat dipakai sendiri atau disambungkan. Anda memilih modul yang dibutuhkan sekarang, lalu menambah yang lain saat usaha bertumbuh."
        />

        <div className="pos-map">
          <div className="pos-map-col pos-map-in">
            <p className="pos-map-label">Data yang masuk</p>
            {inputs.map((node) => <Node node={node} key={node.code} className="pos-node-in" />)}
          </div>

          <div className="pos-map-joint pos-map-joint-in" aria-hidden="true" />

          <div className="pos-map-hub">
            <Node node={hub} className="pos-node-hub" />
            <div className="pos-map-devices">
              <p className="pos-map-label">Perangkat di meja kasir</p>
              {devices.map((node) => <Node node={node} key={node.code} className="pos-node-device" />)}
            </div>
          </div>

          <div className="pos-map-joint pos-map-joint-out" aria-hidden="true" />

          <div className="pos-map-col pos-map-out">
            <p className="pos-map-label">Yang dibaca pemilik</p>
            {outputs.map((node) => <Node node={node} key={node.code} className="pos-node-out" />)}
          </div>

          <div className="pos-map-access">
            <span className="pos-index">{access.code}</span>
            <h3>{access.title}</h3>
            <p>{access.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TicketFlowProps {
  kicker: string;
  stages: SystemNode[];
  fields: Array<{ name: string; stores: string }>;
  counter: SystemNode[];
}

/** A service ticket as it moves through the shop, next to the data each ticket can hold. */
export function ServiceTicketFlow({ kicker, stages, fields, counter }: TicketFlowProps) {
  return (
    <section className="detail-section pos-ticket-section" aria-labelledby="pos-ticket-title">
      <div className="detail-shell">
        <SectionHead
          kicker={kicker}
          title="Satu tiket servis, dari HP diterima sampai diambil"
          id="pos-ticket-title"
          intro="Sistem dapat dirancang mencakup alur berikut. Nama status dan urutannya mengikuti cara kerja teknisi di konter Anda."
        />

        <div className="pos-ticket-layout">
          <ol className="pos-ticket-stages">
            {stages.map((stage) => (
              <li key={stage.code}>
                <span className="pos-index">{stage.code}</span>
                <div>
                  <h3>{stage.title}</h3>
                  <p>{stage.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="pos-ticket-card">
            <p className="pos-map-label">Data yang dapat dicatat per tiket</p>
            <dl>
              {fields.map((field) => (
                <div key={field.name}>
                  <dt>{field.name}</dt>
                  <dd>{field.stores}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="pos-counter">
          <p className="pos-map-label">Di sisi kasir dan pemilik</p>
          <div className="pos-counter-list">
            {counter.map((node) => <Node node={node} key={node.code} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

interface StockFlowProps {
  kicker: string;
  flow: SystemNode[];
  controls: SystemNode[];
}

/** Goods moving left to right through the ledger, with the checks that keep the numbers honest underneath. */
export function StockFlow({ kicker, flow, controls }: StockFlowProps) {
  return (
    <section className="detail-section pos-stock-section" aria-labelledby="pos-stock-title">
      <div className="detail-shell">
        <SectionHead
          kicker={kicker}
          title="Alur barang yang dicatat sistem"
          id="pos-stock-title"
          intro="Setiap perpindahan barang menjadi baris di buku stok, sehingga angka di layar bisa ditelusuri asalnya."
        />

        <ol className="pos-stock-flow">
          {flow.map((node) => (
            <li key={node.code}>
              <span className="pos-process-node" aria-hidden="true" />
              <span className="pos-index">{node.code}</span>
              <h3>{node.title}</h3>
              <p>{node.body}</p>
            </li>
          ))}
        </ol>

        <div className="pos-stock-controls">
          <p className="pos-map-label">Kontrol yang menjaga angka stok tetap benar</p>
          <div>
            {controls.map((node) => <Node node={node} key={node.code} className="pos-node-control" />)}
          </div>
        </div>
      </div>
    </section>
  );
}
