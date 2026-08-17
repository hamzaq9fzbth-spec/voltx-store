import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Truck, 
  Package, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  AlertCircle 
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const OrderTrackingModal: React.FC = () => {
  const { 
    isOrderTrackingOpen, 
    setIsOrderTrackingOpen, 
    orders,
    trackingOrderId,
    setTrackingOrderId,
    formatPrice
  } = useStore();

  const [inputOrderId, setInputOrderId] = useState(trackingOrderId || '');
  const [searchedOrder, setSearchedOrder] = useState(() => {
    return orders.find(o => o.id === trackingOrderId) || orders[0] || null;
  });
  const [searchError, setSearchError] = useState('');

  if (!isOrderTrackingOpen) return null;

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = inputOrderId.trim().replace('#', '').toUpperCase();
    const found = orders.find(o => o.id.toUpperCase() === clean || o.trackingNumber.toUpperCase() === clean);

    if (found) {
      setSearchedOrder(found);
      setSearchError('');
    } else {
      setSearchError('Order ID or Tracking Number not found. Check your confirmation email.');
    }
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsOrderTrackingOpen(false)}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '720px', padding: '2rem' }}
      >
        <button 
          onClick={() => setIsOrderTrackingOpen(false)}
          className="btn-icon"
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(0, 242, 254, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-cyan)'
          }}>
            <Truck size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Live Order & Shipment Tracking
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Real-time automated status updates from the global logistics grid
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleLookup} style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              placeholder="Enter Order ID (e.g. VTX-49821) or Tracking #"
              value={inputOrderId}
              onChange={(e) => setInputOrderId(e.target.value)}
              style={{
                flex: 1,
                padding: '0.65rem 1rem',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)'
              }}
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '0.65rem 1.25rem' }}>
              <Search size={16} />
              <span>Track</span>
            </button>
          </div>

          {searchError && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-rose)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
              <AlertCircle size={14} />
              <span>{searchError}</span>
            </div>
          )}
        </form>

        {/* Order Details Display */}
        {searchedOrder ? (
          <div>
            {/* Status Header */}
            <div style={{
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              border: '1px solid var(--border-subtle)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <span className="badge badge-emerald" style={{ marginBottom: '0.35rem' }}>
                  In Transit • On Schedule
                </span>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Order #{searchedOrder.id}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Carrier Tracking: {searchedOrder.trackingNumber}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Estimated Delivery:</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                  {searchedOrder.estimatedDelivery}
                </div>
              </div>
            </div>

            {/* Tracking Milestones */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              position: 'relative',
              paddingLeft: '1.5rem',
              borderLeft: '2px solid var(--accent-cyan)',
              marginLeft: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '-1.95rem',
                  top: '0',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: 'var(--accent-cyan)',
                  boxShadow: 'var(--glow-cyan)'
                }} />
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Departed Regional Logistics Facility
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  San Francisco Sorting Hub (FedEx Priority Flight) • Today, 2:15 PM
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '-1.95rem',
                  top: '0',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: 'var(--accent-emerald)'
                }} />
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Package Processed & Barcode Scanned
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  Express Logistics Hub #04 • Today, 8:40 AM
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '-1.95rem',
                  top: '0',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: 'var(--accent-emerald)'
                }} />
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Order Placed & Payment Authorized
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  Online Store • {searchedOrder.date}
                </div>
              </div>
            </div>

            {/* Destination summary */}
            <div style={{
              background: 'var(--bg-surface)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <MapPin size={20} color="var(--accent-cyan)" />
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Delivering to: <strong style={{ color: 'var(--text-primary)' }}>{searchedOrder.customer.address}, {searchedOrder.customer.city}</strong>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--text-muted)' }}>
            No orders found. Place an order to test live tracking!
          </div>
        )}
      </div>
    </div>
  );
};
